# Example - How to use gulp-angular-library-builder

## Structure
- The following section defined the structure of the module


    |---- bower_components       - contains bower files
    |---- target                 - contains build files for dist
    |---- node_modules           - contains node files
    |---- src
    |     |---- component.a
    |           |---- components     - contains script files that will be bundled to target/{module-name}.js
    |           |---- resources      - contains static files that should be available in target/resources
    |           |---- styles         - contains sass files that will be boundled to target/{module-name}.scss
    |           |---- templates      - contains html files that will be added to angular template cache and
    |---- bower.json             - project bower configurations
    |---- gulpfile.js            - project gulp configurations
    |---- package.json           - project node configurations

## Init
Install dependent modules for the toolchain (gulp)

1. $my-init.bat
2. $npm install
3. $bower install
4. $gulp
