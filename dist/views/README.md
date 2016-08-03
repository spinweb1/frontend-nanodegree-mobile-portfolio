FEND Project: Website Performance Optimization
========

Website Performance Optimization provides examples of ways to optimize
JavaScript code for better performance.

Look how easy it is to use:

    open index.html
    view optimized code in main.min.js


Features
--------

- Optimized "for loop", created second "for loop" for phase variable, moved variables out of loop
- Optimized JavaScript selectors (changed .querySelectAll() to getElementsByClassName())
- Reduced the number of times the DOM is queried by caching
- Moved all the .style things in pizzaElementGenerator to the bottom of it.  (Grouping Paint)

Installation
------------

Install Website Performance Optimization by:

- Double clicking on the pizza.html file in the dist folder.
	
Updating
--------

- Clone the repo to your machine, or download it and unzip it
- If you do not have npm installed on your machine, install it now: http://blog.npmjs.org/post/85484771375/how-to-install-npm
- To update the files, you must also have Grunt installed: http://gruntjs.com/getting-started
- Change to the project's root directory.
- Install project dependencies by running: npm install.
- Run Grunt by typing: grunt.

Performance Testing
-------------------

- Go to this site:  https://developers.google.com/speed/pagespeed/insights/
- Enter the page url in the box and click "analyze" 


Support
-------

If you are having issues, please let us know.
We have a mailing list located at: project@domainhere.com

License
-------

The project is licensed under the BSD license.