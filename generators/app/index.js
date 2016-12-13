'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

function notify(verb, noun) {
  if (process.env.NODE_ENV !== 'test') {
    console.log(chalk.green('> ') + verb + ' ' + chalk.yellow(noun) + '...');
  }
}

module.exports = yeoman.Base.extend({
  prompting: function () {
    this.log(yosay(
      'Howdy! This is the ' + chalk.red('Phaser TypeScript') + ' generator!'
    ));

    var prompts = [{
      type    : 'input',
      name    : 'projectName',
      message : 'So what’s your game called?'
    }, {
      type    : 'input',
      name    : 'description',
      message : 'Right-o! Describe it to me in one sentence.'
    }, {
      type    : 'input',
      name    : 'userName',
      message : 'I’m literally intrigued! What should I call you?',
      store   : true
    }, {
      type    : 'input',
      name    : 'email',
      message : 'And what is your electronic mail address?',
      store   : true
    }, {
      type    : 'input',
      name    : 'license',
      message : 'What license should your game be published under?',
      default : 'ISC',
      store   : true
    }, {
      type    : 'confirm',
      name    : 'installDeps',
      message : 'Shall I install your dependencies?',
      default : true
    }, {
      type    : 'confirm',
      name    : 'git',
      message : 'Might I initialize a Git repository for you?',
      default : true
    }, {
      type    : 'confirm',
      name    : 'heroku',
      message : 'Would you care for a Heroku app?',
      default : false
    }];

    return this.prompt(prompts).then(function (props) {
      this.props = props;
    }.bind(this));
  },

  writing: function () {
    let files = [
      'gulpfile.js',
      'index.js',
      'lib',
      'public',
      'tsconfig.json',
      'views'
    ];

    if (this.props.heroku) files.push('Procfile');

    for (let file of files) {
      this.fs.copy(this.templatePath(file), file);
    }
    this.fs.copy(this.templatePath('gitignore'), '.gitignore');

    const tplFiles = [
      "LICENSE",
      "package.json",
      "README.md",
      "src/app.ts",
      "src/Boot.ts",
      "src/Game.ts",
      "src/Preloader.ts",
      "src/Main.ts"
    ];

    const packageName = this.props.projectName
          .toLowerCase()
          .replace(/[^\w\s]/gi, '')
          .split(' ')
          .join('-');

    const namespace = this.props.projectName
          .replace(/[^\w\s]/gi, '')
          .split(' ')
          .map((a) => a[0].toUpperCase() + a.slice(1))
          .join('');

    const tplData = {
      projectName: this.props.projectName,
      description: this.props.description,
      userName: this.props.userName,
      email: this.props.email,
      license: this.props.license,
      packageName: packageName,
      namespace: namespace
    };

    for (const file of tplFiles) {
      this.fs.copyTpl(
        this.templatePath(file),
        this.destinationPath(file),
        tplData
      );
    }
  },

  install: function () {
    if (this.props.installDeps) {
      console.log();
      notify('Installing', 'Node.js packages');
      this.spawnCommandSync('npm', ['install']);

      notify('Creating', 'initial build');
      this.spawnCommandSync('gulp', ['compress']);
    }

    if (this.props.git) {
      console.log();
      notify('Initializing', 'Git repository');
      this.spawnCommandSync('git', ['init']);
    }

    if (this.props.heroku && process.env.NODE_ENV !== 'test') {
      console.log();
      notify('Creating', 'Heroku app');
      this.spawnCommandSync('heroku', ['create']);
    }

    if (process.env.NODE_ENV !== 'test') {
      console.log();
      console.log(`👾  All done! Run ${chalk.yellow('npm start')} to serve up the demo game.`);
    }
  }
});
