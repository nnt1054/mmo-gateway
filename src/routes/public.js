import { Router } from 'express';
import articlePath from '/articles';
var fs = require('fs'),
	fm = require('front-matter'),
	marked = require("marked");

const router = Router();

export default (app) => {
	app.use('/', router);

	/* GET home page. */
	router.get('/', function(req, res, next) {
		var context = {
			title: 'Express',
			isAuthenticated: req.isAuthenticated(),
			user: req.userContext,
		}
		res.render('index', context);
	});

	router.get("/authorization-code/callback", (req, res) => {
		res.redirect("/dashboard");
	});

	router.get("/logout/callback", (req, res) => {
		req.logout();
		res.redirect("/");
	});

	router.get("/test", (req, res) => {
		res.render('pages/index', {});
	});

	router.get("/article", (req, res) => {
		var context = {
			content: "",
		}
		fs.readFile(articlePath + '/test.md', 'utf8', function(err, data) {
			if (err) throw err
			var content = fm(data);
			var html_content = marked(content.body);
			context = {
				title: content.attributes.title,
				description: content.attributes.description,
				content: html_content
			}
			res.render('pages/article', context);
		})
	})
}