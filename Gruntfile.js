module.exports = function (grunt) {
  grunt.initConfig({
    protractor: {
      options: {

        // Do you want the output to use fun colors?
        noColor: true,

        // Stops Grunt process if a test fails
        keepAlive: true,

        // testing framework,
        // jasmine is the default
        framework: 'jasmine2',

        // Set to true if you would like to use the Protractor command line debugging tool
        // debug: true,

        // Additional arguments that are passed to the webdriver command
        args: {}
      },
      e2e: {
        // Local protractor config
        configFile: "conf.dev.js"

      },
      e2e_saucelabs: {
        // Saucelabs protractor config
        configFile: "conf.sl.js"
      }
    },
    shell: {
      webdriverupdate: {
        command: 'webdriver-manager update',
        options: {          
          execOptions: {
            cwd: 'node_modules/grunt-protractor-runner/node_modules/.bin'
          }
        }
      }
    }
  });

  var target = "e2e";
  // Takes provided command line
  var runWithSauceLabs = grunt.option('runWithSauceLabs') || false;
  if (runWithSauceLabs === true) {
    target += "_saucelabs";
  }

  grunt.loadNpmTasks('grunt-protractor-runner');
  grunt.loadNpmTasks('grunt-shell');

  grunt.registerTask('test', ['protractor:' + target]);
};
