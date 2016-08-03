module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
	
		
	htmlmin: {                                     // Task 
	  dist: {                                      // Target 
		options: {                                 // Target options 
		  removeComments: true,
		  collapseWhitespace: true
		},
		files: {                                   // Dictionary of files 
		  '../../dist/pizza.html': 'pizza.html'          // 'destination': 'source' 
		}
	  }
	},
		
	// try 'gm' or 'im' engines.  Both need to be installed.  The one first in the registry may be the one that works.
	responsive_images: {
	 main: {
	   options: {
		 engine: 'gm',
		 sizes: [{
		   width: 360
		 }, {
		   width: 420
		 }]
	   },
	   files: [{
		 expand: true,
		 src: ['images/**/*.{gif,jpg,jpeg}'],
		 cwd: '',
		 dest: '../../dist/'
	   }]
	 }
	},
	
	imagemin: {
        png: {
            options: {
                optimizationLevel: 7,
                pngquant: true
            },
            files: [{
                expand: true,
                cwd:"images",
                src: ["**/*.png"],
                dest: "../../dist/images",
                ext: ".png"
            }]
        },

        jpg: {
            options: {
                progressive: true
            },
            files: [{
                expand: true,
                cwd:"images",
                src: ["**/*.jpg"],
                dest: "../../dist/images",
                ext: ".jpg"
            }]              
        } 
  	},
	
	uglify: {
	  options: {
		mangle: false
	  },
	  my_target: {
		files: {
		  '../../dist/js/main.min.js': ['js/**/*.js']
		}
	  }
	},
	
	cssmin: { // Task
	  dist:   { // Target
		options: { // Target options
		  banner: '/*! Cams Pizza App Performance Optimization 1.0.0 | Eric Schweitzer (@eric_ebs) */'
		},
		files: { // Dictionary of files
			'../../dist/css/styles.min.css': ['css/bootstrap-grid.css'] // 'destination': 'source'
		}
	  }
	},
	
  });

  // Default task(s).
  grunt.registerTask('default', ['htmlmin', 'responsive_images', 'imagemin', 'uglify', 'cssmin']);

};