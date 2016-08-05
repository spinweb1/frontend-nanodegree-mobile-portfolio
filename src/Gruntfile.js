module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
	
		
		
	// try 'gm' or 'im' engines.  Both need to be installed.  The one first in the registry may be the one that works.
	responsive_images: {
	 main: {
	   options: {
		 engine: 'gm',
		 sizes: [{
		   width: 100
		 }]
	   },
	   files: [{
		 expand: true,
		 src: ['img/**/*.{gif,jpg,jpeg}'],
		 cwd: '',
		 dest: 'dist/'
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
                cwd:"img",
                src: ["**/*.png"],
                dest: "dist/img",
                ext: ".png"
            }]
        },

        jpg: {
            options: {
                progressive: true
            },
            files: [{
                expand: true,
                cwd:"img",
                src: ["**/*.jpg"],
                dest: "dist/img",
                ext: ".jpg"
            }]              
        } 
  	},
	
	processhtml: {
        build: {
            files: {
                'dist/index.html' : ['index.html']  // destination : source
            }
        }
    },
		
	htmlmin: {                                     // Task 
	  dist: {                                      // Target 
		options: {                                 // Target options 
		  removeComments: false,
		  collapseWhitespace: true
		},
		files: {                                   // Dictionary of files 
		  'dist/index.html': 'dist/index.html'          // 'destination': 'source' 
		}
	  }
	},
	
	
  });

  // Default task(s).
  grunt.registerTask('default', ['responsive_images', 'imagemin', 'processhtml', 'htmlmin']);
  grunt.registerTask('images', ['responsive_images', 'imagemin', 'processhtml']);
  //grunt.registerTask('images', ['responsive_images', 'imagemin', 'htmlmin']);
};