module.exports = function (grunt) {
    'use strict';

    grunt.registerTask('Hello', 'say hello', function () {
        grunt.log.writeln('Hello from grunt');
    });

    grunt.registerTask('default', 'hello');
};