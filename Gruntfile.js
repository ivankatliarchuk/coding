'use strict';

module.exports = function (grunt) {

    grunt.registerTask('Hello', 'say hello', function () {
        grunt.log.writeln('Hello from grunt');
    });

    grunt.registerTask('default', 'hello');
};