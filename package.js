// package metadata file for Meteor.js
var packageName = 'rshashkov:angular-meteor-text-angular';
var where = 'client'; // where to install: 'client' or 'server'. For both, pass nothing.
var version = '0.0.4';
var summary = 'Text editor for Angular';
var gitLink = 'https://github.com/ruslanchek/angular-meteor-text-angular';
var documentationFile = 'README.md';

// Meta-data
Package.describe({
	name: packageName,
	version: version,
	summary: summary,
	git: gitLink,
	documentation: documentationFile
});

Package.onUse(function(api) {
	api.versionsFrom(['METEOR@0.9.0', 'METEOR@1.1']); // Meteor versions
	api.addFiles('src/rangy.js', where);
	api.addFiles('src/textAngular.js', where);
});
