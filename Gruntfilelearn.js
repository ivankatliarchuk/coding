'use strict';

module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    qunit: {
      all: ['test/algorithms/q_alg.html']
    }
  });

  grunt.registerTask('test', 'qunit');

  grunt.loadNpmTasks('grunt-contrib-qunit');

};
