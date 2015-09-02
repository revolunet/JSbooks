module.exports = function (grunt) {
  'use strict';

  var liveReloadPort = 35729;

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('bower.json'),
    // Files to watch for changes in order to make the browser reload
    watch: {
      options: {
        livereload: liveReloadPort
      },
      livereload: {
        files: [
          'index.html',
          'src/**/*.js'
        ]
      },
    },

    // Fires up a simple connect server - useful for development
    connect: {
      options: {
        port: 9999,
        hostname: 'localhost',
        livereload: liveReloadPort
      },
      livereload: {
        options: {
          open: true,
          base: [
            // Directories to serve static files from
            '.',
            'app',
            'src',
          ]
        }
      }
    },
    uglify: {
      options: {
        preserveComments: 'some'
      },
      dist: {
        src: '<%= pkg.name %>.js',
        dest: '<%= pkg.name %>.min.js'
      }
    },
    concat: {
      options: {
        process: true
      },
      dist: {
        src: 'src/<%= pkg.name %>.js',
        dest: '<%= pkg.name %>.js'
      }
    },
    karma: {
      dist: {
        configFile: 'karma.conf.js',
        browsers: ['PhantomJS']
      },
      watch: {
        configFile: 'karma.conf.js',
        singleRun: false,
        autoWatch: true
      }
    },
    changelog: {},
    ngmin: {
      dist: {
        src: '<%= pkg.name %>.js',
        dest: '<%= pkg.name %>.js'
      }
    }
  });

  grunt.registerTask('default', ['concat', 'ngmin', 'uglify']);
  grunt.registerTask('server', ['default', 'connect:livereload', 'watch']);
  grunt.registerTask('test', ['karma:dist']);
};
