'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var execSync = require('child_process').execSync;

module.exports = yeoman.Base.extend({
  prompting: function () {
    this.log(yosay(
      'Howdy! This is the ' + chalk.red('Phaser TypeScript') + ' generator!'
    ));

    return this.prompt([{
      type    : 'confirm',
      name    : 'ready',
      message : 'Ready to roll?'
    }]).then(function (answers) {
      this.answers = answers;
    }.bind(this));
  },

  writing: function () {
    if (this.answers.ready) {
      this.copy('gitignore', '.gitgnore');
      this.copy('LICENSE');
      this.copy('Procfile');
      this.copy('README.md');
      this.copy('gulpfile.js');
      this.copy('index.js');
      this.copy('package.json');
      this.copy('setup.sh');
      this.copy('tsconfig.json');
      this.copy('typings.json');
      this.directory('assets');
      this.directory('lib');
      this.directory('src');
      this.directory('views');
    }
  },

  install: function () {
    if (this.answers.ready) {
      this.spawnCommand('./setup.sh');
    }
  },

  end: function () {
    if (!this.answers.ready) {
      this.log(`${chalk.green('>')} That’s cool; maybe later?`);
    }
  }
});
