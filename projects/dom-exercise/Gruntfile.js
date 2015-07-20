/* eslint-env node */
/* eslint global-strict: 0 */
'use strict';

module.exports = function (grunt) {

    grunt.config.init({
        watch: {
            js: {
                files: ['scripts/**/*.js'],
                tasks: ['build']
            },
            css: {
                files: ['src/**/*.css'],
                tasks: ['build']
            },
            handlebars: {
                files: ['scripts/**/*.hbs'],
                tasks: ['build']
            }
        },
        clean: {
            main: {
                src: ['dist/**', 'build/**', '!dist/index.html']
            },
            temp: {
                src: ['dist/*.concat.*']
            }
        },
        eslint: {
            options: {
                silent: true
            },
            src: ['scripts/**/*.js', '!scripts/node_modules/**/*', '!scripts/libs/*.js']
        },
        cssmin: {
            main: {
                files: {
                    'dist/style.min.css': ['dist/*.css']
                }
            }
        },
        processhtml: {
            'dist/index.html': ['build/index.html']
        },
        copy: {
            main: {
                files: [
                    {
                        expand: true,
                        cwd: './',
                        src: ['**', '!scripts/views/**', '!node_modules/**', '!package.json'],
                        dest: 'build/'
                    }
                ]
            }
        },
        concat: {
            options: {
                separator: ';'
            },
            js: {
                src: ['build/scripts/**'],
                dest: 'dist/app.concat.js'
            }
        },
        concat_css: {
            main: {
                src: ['build/styles/helpers.css', 'build/styles/colors.css', 'build/styles/typography.css', 'build/styles/layout.css'],
                dest: 'dist/styles.concat.css'
            }
        },
        uglify: {
            main: {
                files: {
                    'dist/app.min.js': ['dist/app.concat.js']
                }
            }
        },
        handlebars: {
            main: {
                options: {
                    namespace: 'Templates',
                    processName: function (filePath) {
                        return filePath.replace(/^scripts\/views\//, '').replace(/\.hbs$/, '');
                    }
                },
                files: {
                    'build/scripts/templates.jst': ['scripts/views/**/*.hbs']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-eslint');
    grunt.loadNpmTasks('grunt-contrib-handlebars');
    grunt.loadNpmTasks('grunt-processhtml');
    grunt.loadNpmTasks('grunt-concat-css');

    grunt.registerTask('default', ['build']);
    grunt.registerTask('build', ['clean:main', 'eslint', 'handlebars', 'copy']);
    grunt.registerTask('dist', ['concat', 'concat_css', 'processhtml', 'uglify', 'cssmin', 'clean:temp']);

};
