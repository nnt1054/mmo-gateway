import articlePath from '/articles';
var fs = require('fs'),
	fm = require('front-matter'),
	marked = require("marked"),
	path = require("path"),
	util = require('util');

var posts = {};
fs.readdir(articlePath, (err, files) => {
	files.forEach(file => {
		if (path.extname(file) == '.md') {
			fs.readFile(articlePath + '/' + file, 'utf8', (err, data) => {
				var content = fm(data);
				content.attributes.href = '/blog/article/' + path.parse(file).name;
				posts[file] = content.attributes;
			})
		}
	})
})

class BlogService {

	constructor(){}

	getPosts() {
		return posts;
	}

}

export default new BlogService();