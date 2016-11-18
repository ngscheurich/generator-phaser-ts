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
      type    : 'input',
      name    : 'projectName',
      message : 'So what’s your game called?'
    }, {
      type    : 'input',
      name    : 'description',
      message : 'Right-o! What’s it like?'
    }, {
      type    : 'input',
      name    : 'userName',
      message : 'I’m literally intrigued! What should I call you?',
      store   : true
    }, {
      type    : 'input',
      name    : 'email',
      message : 'Have an electronic mail address?',
      store   : true
    }, {
      type    : 'input',
      name    : 'license',
      message : 'What’s your favorite license?',
      default : 'ISC',
      store   : true
    }]).then(function (answers) {
      this.answers = answers;
    }.bind(this));
  },

  writing: function () {
    this.copy('.gitignore', '.gitignore');
    this.copy('Procfile');
    this.copy('gulpfile.js');
    this.copy('index.js');
    this.copy('setup.sh');
    this.copy('tsconfig.json');
    this.copy('typings.json');
    this.directory('assets');
    this.directory('lib');
    this.directory('views');

    const namespace = this.answers.projectName
            .split('-')
            .map((a) => a[0].toUpperCase() + a.slice(1))
            .join('');
    const tplData = {
      projectName: this.answers.projectName,
      description: this.answers.description,
      userName: this.answers.userName,
      email: this.answers.email,
      license: this.answers.license,
      namespace: namespace
    };
    const tplFiles = [
      "LICENSE",
      "package.json",
      "README.md",
      "src/app.ts",
      "src/Boot.ts",
      "src/Game.ts",
      "src/Preloader.ts",
      "src/Start.ts"
    ];

    for (const file of tplFiles) {
      this.fs.copyTpl(this.templatePath(file),
        this.destinationPath(file), tplData);
    }
  },

  install: function () {
    this.spawnCommand('./setup.sh');
  }
});
