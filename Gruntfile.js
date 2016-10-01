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
    /* configure watcher */
    watch: {
      gruntfile: {
        files: ['app/**/*.html', 'app/**/*.js'],
        tasks: ['test']
      }
    }
  });

  grunt.registerTask('Hello', 'say hello', function () {
    grunt.log.writeln('Hello from grunt');
  });

  grunt.registerTask('test', ['qunit', 'jasmine']);

  // These plugins provide tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['jshint', 'hello']);
};
