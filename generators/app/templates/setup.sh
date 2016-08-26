#!/bin/sh

C='\033[0;32m'
N='\033[0m'

say() {
    echo "\n${C}>${N} $1"
}

say "Installing Node.js packages..."
npm install --loglevel error

say "Installing type definitions..."
typings install 2>/dev/null

say "Creating initial development build..."
gulp build
gulp bundle

say "Creating Heroku app..."
heroku create

say "All done! Run \`npm start\` to preview your new game."
