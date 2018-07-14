module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    dist: 'dist/latest',

    'userscript-meta': {
      tmp: {
        dest: 'tmp/userscript.meta.js'
      }
    },

    clean: {
      default: ['<%= dist %>'],
      tmp: ['tmp']
    },

    cssmin: {
      options: {
        keepSpecialComments: '0',
        processImport: false,
        roundingPrecision: -1,
        shorthandCompacting: true,
        aggressiveMerging: true,
        advanced: true
      },
      target: {
        files: [
          {
            expand: true,
            cwd: 'src',
            src: ['css/*.css'],
            dest: 'tmp',
            ext: '.css'
          },
          {
            expand: true,
            cwd: 'tmp',
            src: ['sass_dist/*.css'],
            dest: 'tmp/css',
            ext: '.css'
          }
        ]
      }
    },

    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true,
          quoteCharacter: '"'
        },
        files: [{
          expand: true,
          cwd: 'src',
          src: ['html/*.html'],
          dest: 'tmp',
          ext: '.html'
        }]
      }
    },

    uglify: {
      options: {
        compress: true,
        output: { comments: false },
        sourceMap: false
      },
      compress: {
        files: {
          'tmp/js/1-med-css.min.js': 'tmp/js/1-med-css.js'
        }
      }
    },

    concat: {
      options: {
        stripBanners: false
      },
      js: {
        src: ['src/js/utils.js', 'src/js/index.js'],
        dest: 'tmp/js/0-concat.js'
      },
      prependMeta: {
        files: {
          '<%= dist %>/<%= pkg.name %>.js': ['tmp/userscript.meta.js', 'tmp/js/2-iife.js'],
          // '<%= dist %>/<%= pkg.name %>.min.js': ['tmp/userscript.meta.js', 'tmp/js/1-med-css.min.js']
        }
      },

      iife: {
        options: {
          stripBanners: true,
          nonull: true,
          banner: '(function () {\n  "use strict";\n',
          footer: '}());'
        },
        files: {
          'tmp/js/2-iife.js': 'tmp/js/1-med-css.js'
        },
      },

    },

    watch: {
      options: {
        debounceDelay: 250,
        livereload: 35729,
        spawn: false,
        interval: 500
      },
      files: ['src/js/*.js', 'Gruntfile.js', 'src/css/*.css', 'src/html/*.html', 'package.json'],
      tasks: ['dev']
    },

    jshint: {
      files: ['tmp/js/*.js', 'Gruntfile.js'],
      options: {
        jshintrc: '.jshintrc',
        debug: true
      }
    },

    preprocess: {
      options: {
        context: {
          DEBUG: true
        }
      },
      jsCss: {
        src: 'tmp/js/0-concat.js',
        dest: 'tmp/js/1-med-css.js'
      }
    },

    copy: {
      default: {
        expand: true,
        cwd: '<%= dist %>',
        src: ['**'],
        dest: 'dist/v<%= pkg.version %>'
      }
    },
  })

  grunt.loadNpmTasks('grunt-contrib-concat')
  grunt.loadNpmTasks('grunt-contrib-copy')
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-contrib-jshint')
  grunt.loadNpmTasks('grunt-contrib-clean')
  grunt.loadNpmTasks('grunt-contrib-cssmin')
  grunt.loadNpmTasks('grunt-contrib-htmlmin')
  grunt.loadNpmTasks('grunt-contrib-uglify-es')
  grunt.loadNpmTasks('grunt-preprocess')
  grunt.loadTasks('grunt-userscript-meta')


  grunt.registerTask('dev', [
    'clean', 'userscript-meta',
    'cssmin', 'htmlmin', 'concat:js', 'jshint',
    'preprocess:jsCss',
    'concat:iife', 'concat:prependMeta',
  ])

  grunt.registerTask('default', [
    'dev',
    'clean:tmp', 'copy'
  ])

}
