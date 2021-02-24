import { Router } from 'express';
import BlogService from '/services/BlogService';
import articlePath from '/articles';
var fs = require('fs'),
	fm = require('front-matter'),
	marked = require("marked"),
	path = require("path"),
	util = require('util');

const router = Router();

export default (app) => {
	app.use('/blog', router);

	// blog home page
	router.get('/', async function(req, res, next) {

		var posts = BlogService.getPosts();
		var context = {
			title: 'Express',
			isAuthenticated: req.isAuthenticated(),
			user: req.userContext,
			posts: posts,
		}
		res.render('pages/blog', context);
	});

	router.get('/article', function(req, res, next) {
		res.redirect('/blog')
	});

	router.get("/article/:article_name", (req, res) => {
		var article_name = req.params.article_name;
		fs.readFile(articlePath + '/'+ article_name + '.md', 'utf8', function(err, data) {
			if (err) {
				res.status(404).render('404');
			}
			var content = fm(data);
			var html_content = marked(content.body);
			var context = {
				title: content.attributes.title,
				description: content.attributes.description,
				content: html_content
			}
			res.render('pages/article', context);
		})
	}) 
}