# Phaser TypeScript generator

This provides a handy jump-start for a [Phaser][phaser] project using
[TypeScript][typescript]. In addition to a ready-to-code scaffolding, you get stuff like:

- A fully-functional Phaser project, complete with TypeScript type definitions
- Automated tasks for compiling, concatenating, deploying, et al.
- A demo “game” to get you going
- A Heroku deployment setup

## Requirements

There’s two things you’re gonna want to have installed globally before you run
this generator:

- [Yarn][yarn]
- [Typings][typings]

Of course, you’ll also need [Node.js][nodejs] and [Yeoman][yeoman], but you
already knew that, yeah?

## Installation

    $ yarn global add generator-phaser-ts

That’s it.

## Usage

    $ yo phaser-ts
    
This gets your files all in the proper spots, installs software
requirements, and does an initial build of the included demo game.

## Development

This project uses [Gulp][gulp] to automate various common development tasks:

- `gulp lint`: Processes all .ts files in the src directory with `tslint` and
  displays the results
- `gulp build`: Compiles all .ts files in the src directory after running the
  `lint` task; outputs .js files to the build directory
- `gulp bundle`: Concatenates all .js files in the build and lib directories
  into a single file: .build/bundle.js
- `gulp compress`: Uglifies .build/bundle.js; outputs build/bundle.min.js
- `gulp watch`: Watches for changes to files; when a change to a file is
  detected, runs the appropriate `bundle` task and reloads the website.
- `gulp deploy`: Deploys to Heroku. See below.
- `gulp`: The default Gulp task. Runs the `bundle` task.

For convenience, this project includes a basic Node.js application that serves
up your game courtesy of the [Express][express] framework. To start the Express
server, run `yarn server`. You should now be able to see your game at something
along the lines of [http://localhost:3000](http://localhost:3000).

If you would like to run the server as well as rebuild your files upon save, i.e.
what you’ll be doing most of the time, run `yarn devel`.

## Deployment

Included is a [Heroku][heroku]-compatible [Procfile][heroku-procfile] so—assuming
you have the [Heroku Command Line Interface][heroku-cli] installed and you’re logged
in—getting your game up on them internets should be as simple as:

    $ yarn deploy

You can `yarn production` to locally serve your game using minified code.

## Contributing

Please note that this an opinionated tool based on my particular preferences.
That being said, all pull requests are welcome!

## Licenses

This project is ISC (c) 2016 Nicholas Scheurich.<br>
Phaser is MIT (c) 2016 Richard Davey, Photon Storm Ltd.<br>
PC font is CC BY-SA 4.0 from INT10h.org.

[phaser]: http://phaser.io/
[typescript]: https://www.typescriptlang.org/
[nodejs]: https://nodejs.org/en/
[typings]: https://github.com/typings/typings
[gulp]: http://gulpjs.com/
[express]: https://expressjs.com/
[heroku]: https://www.heroku.com/
[heroku-procfile]: https://devcenter.heroku.com/articles/procfile
[heroku-cli]: https://devcenter.heroku.com/articles/heroku-command-line
[yeoman]: http://yeoman.io/
[yarnpkg]: https://yarnpkg.com/
