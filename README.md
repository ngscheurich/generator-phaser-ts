[![Stories in Ready](https://badge.waffle.io/ngscheurich/generator-phaser-ts.png?label=ready&title=Ready)](https://waffle.io/ngscheurich/generator-phaser-ts)
# Phaser TypeScript project generator

This provides a handy jump-start for a [Phaser][1] project using [TypeScript][2].
In addition to a ready-to-code scaffolding, you get great stuff like:

- A fully-functional Phaser project, complete with type TypeScript type definitions
- Automated tasks for compilation, concatenation, minification, et al.
- A demo “game” to get you going
- A Heroku deployment setup

## Requirements

There’s really only one measly requirement for this project:

- [Typings][5], installed globally

Of course, you’ll also need [Node.js][3], [npm][4], and [Yeoman][11], but you
already knew that, no?

## Installation

    $ npm install -g generator-phaser-ts

That’s it.

## Usage

    $ yo phaser-ts
    
This gets your files all in the proper places, installs all software
requirements, and does an initial build of the included demo game.

## Development

This project uses [Gulp][6] to automate various common development tasks:

- `gulp lint`: Processes all .ts files in the src directory with `tslint` and
  displays the results
- `gulp build`: Compiles all .ts files in the src directory after running the
  `lint` task; outputs .js files to the build directory
- `gulp bundle`: Concatenates all .js files in the build and lib directories
  into a single file: dist/bundle.js
- `gulp compress`: Uglifies dist/bundle.js; outputs dist/bundle.min.js
- `gulp watch`: Watches for changes to files; when a change to a file is
  detected, runs the appropriate task (`build` or `bundle`)
- `gulp deploy`: See below.
- `gulp`: The default Gulp task. Runs the `build` task followed by the `bundle`
  task.

For convenience, this project includes a basic Node.js application that serves
up your games courtesy of the [Express][7] framework. To start the Express
server, run `npm start`. You should now be able to see your game at something
along the lines of [http://localhost:3000](http://localhost:3000).

## Deployment

Included is a [Heroku][8]-compatible [Procfile][9] so—assuming you have the
[Heroku Command Line Interface][9] installed and you’re logged in—getting
your game up on them internets should be as simple as:

    $ gulp deploy

You can `npm run production` to locally serve your game using minified code.

## Contributing

Please note that this an opinionated tool based on my particular preferences.
That being said, all pull requests are welcome!

## Licenses

This project is ISC (c) 2016 Nicholas Scheurich.

Phaser is MIT (c) 2016 Richard Davey, Photon Storm Ltd.

PC font is CC BY-SA 4.0 from INT10h.org.

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
[11]: http://yeoman.io/
