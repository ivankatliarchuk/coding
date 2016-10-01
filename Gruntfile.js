'use strict';

module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // metadata .
    jshint: {
      gruntfile: {
        options: {
          jshintrc: '.jshintrc'
        },
        src: 'Gruntfile.js'
      },
      /* can be set for every module */
      gruntautomation: {
        src: ['app/**/*.js']
      }
    },
    qunit: {
      all: ['test/**/qunit-runner.html']
    },
    jasmine: {
      src: ['app/**/Player.js', 'app/**/Song.js'],
      options: {
        specs: 'test/**/spec/PlayerSpec.js',
        helpers: 'test/**/spec/SpecHelper.js'
      }
    },
    /* configure watcher */
    watch: {
      gruntfile: {
        files: ['app/**/*.html', 'app/**/*.js'],
        tasks: ['test']
      }
    },
    /* move to test*/
    cucumberjs: {
      options: {
      },
      my_features: []
    }
  });

  grunt.registerTask('Hello', 'say hello', function () {
    grunt.log.writeln('Hello from grunt');
  });
  grunt.registerTask('test TDD Qt', 'qunit');
  grunt.registerTask('test BDD Je', 'jasmine');
  grunt.registerTask('test BDD Cr', 'cucumberjs');

  /*grunt.registerTask('test', ['qunit', 'jasmine']);*/

  // These plugins provide tasks.
 /* grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');*/
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-cucumberjs');

/*  grunt.registerTask('default', ['jshint', 'hello']);*/
};
