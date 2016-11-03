# csgsc

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.14.0.
## Build & development

### How to build and deploy the website. 

1. Install node and npm from the web: https://nodejs.org/en/
2. Install Grunt CLI globally (needed for website build): npm install -g grunt-cli

### Previewing the website.
Run `grunt` for building and `grunt serve` for preview.

### Building the website for distribution (adding to webserver):

1. Run 'grunt build' from project home directory to create the website in the
dist/ folder.
2. Add the contents of the dist/ folder to the UCLA flute webserver. 

## Testing

Running `grunt test` will run the unit tests with karma.
