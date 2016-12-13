'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

process.env.NODE_ENV = 'test';

var prompts = {
  projectName: "Nick's Test Game",
  installDeps: false,
  git: false,
  heroku: false
};

describe('generator-phaser-ts:app without Heroku', function () {
  before(function () {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts(prompts)
      .toPromise();
  });

  it('creates default files', function () {
    assert.file([
      '.gitignore',
      'gulpfile.js',
      'index.js',
      'lib',
      'LICENSE',
      'package.json',
      'public',
      'README.md',
      'src',
      'tsconfig.json',
      'views'
    ]);
  });

  it('doesn’t create Procfile', function () {
    assert.noFile('Procfile');
  });

  it('generates package name correctly', function () {
    assert.fileContent('package.json', /"name": "nicks-test-game"/);
  });

  it('generates namespace correctly', function () {
    assert.fileContent('src/app.ts', /new NicksTestGame.Game()/);
  });
});

describe('generator-phaser-ts:app with Heroku', function () {
  before(function () {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts(Object.assign(prompts, {heroku: true}))
      .toPromise();
  });

  it('creates Procfile', function () {
    assert.file('Procfile');
  });
});
