# Phaser TypeScript boilerplate

This is a handy jump-start for a [Phaser][1] project using [TypeScript][2].

## Requirements

There are a few requirements for this project:

- [Node.js][3]
- [npm][4]
- [Typings][5], installed globally

## Setup

After cloning this repository, `cd` into the project and:

    $ npm install
    
This will install all of the required Node packages as well as the Phaser
type definitions.

## Usage

### Development

This project uses [Gulp][6] to run various common development tasks:

- `gulp lint`: Processes all .ts files in the src directory with `tslint` and
  displays the results
- `gulp build`: Compiles all .ts files in the src directory after running the
  `lint` task; outputs .js files to the build directory
- `gulp bundle`: Concatenates all .js files in the build and lib directories
  into a single file: dist/bundle.dev.js
- `gulp obfuscate`: Obfuscates dist/bundle.dev.js; output dist/bundle.prod.js
- `gulp watch`: Watches for changes to files; when a change is detected, runs
  the `build` or `bundle` command based on its location/extension

The default Gulp task, which runs when you simply invoke `gulp`, will run the
`build` task followed by the `bundle` task. You should run this after cloning
the repo if you'd like to see the demo game.

###  Deployment

For convenience, this project includes a basic Node.js application set up with
the [Express][7] framework to serve your game. To start the Express server,
run `npm start`.

Also included is a [Heroku][8]-compatible [Procfile][9] so—assuming you have
the [Heroku Command Line Interface][9] installed—getting your game up on the
internet should be as simple as:

    $ heroku create
    $ git push heroku master

[1]: http://phaser.io/
[2]: https://www.typescriptlang.org/
[3]: https://nodejs.org/en/
[4]: https://www.npmjs.com/
[5]: https://github.com/typings/typings
[6]: http://gulpjs.com/
[7]: https://expressjs.com/
[8]: https://www.heroku.com/
[9]: https://devcenter.heroku.com/articles/procfile
[10]: https://devcenter.heroku.com/articles/heroku-command-line
