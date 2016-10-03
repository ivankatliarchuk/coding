'use strict';

module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    qunit: {
      all: ['test/algorithms/q_alg.html']
    },
    jasmine: {
      src: ['app/**/Person.js'],
      options: {
        specs: ['test/**/jasmine/spec/PersonSpec.js']
      }
    }
  });

  grunt.registerTask('test BDD', 'jasmine');
  grunt.registerTask('test', 'qunit');

  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-jasmine');

};
