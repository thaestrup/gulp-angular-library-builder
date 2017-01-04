# gulp-angular-library-builder
Gulp module to set up common Gulp tasks when building an Angular library.

Basically the module will setup the following tasks.
- clean - removing generated files
- ts - Transpile all typescript files.
- build - get all the source code ready primarily inlining of Angular templates
- test - run all *_spec.js unit tests.
- dist - add a few extra files to the source code that was build such as README.md, bower.json etc.
- prerelease - push the complete set of distribution files to a Git distribution repository tagging with a semver compliant pre-release tag
- release - push the complete set of distribution files to a Git distribution repository tagging with a semver compliant release tag bumping the version of the source code and pushing this back to its Git ``origin``

By default the following directory structure would end up something like the following.

    |---- bower_components
    |---- dist
          |---- ts
    |---- node_modules
    |---- src
    |     |---- component.a
    |     |     |---- component.a.module.js
    |     |     |---- component.a.module.spec.js
    |---- bower.json
    |---- gulpfile.js
    |---- package.json

It is assumed that Bower is used to resolve dependencies needed for the library. It is also assumed Bower is used for distributing the library. The resolved dependencies is going to be placed in the ``bower_components`` directory.

The ``dist`` directory is going to contain all build artifact.

The ``dist\ts`` directory is going to contain typescript transpiled artifacts.

The ``node_modules`` directory is containing the build module itself possibly along with other required modules.

The ``src`` directory is assumed to contain the source code for the library following Angular best practice. Each sub directory of the ``src`` directory is assumed to contain a Angular module. HTML template files is going to be inline during the build of the project. The script files of the modules is going to be concatenated paying attention to the order of the files such the the file defining the module is going to be read prior to files working with the module.

To use this library you must add ``gulp-angular-library-builder`` to your ``package.json`` file for instance.

    npm install --save-dev gulp-angular-library-builder

You should configure your project from your ``gulpfile.js``, e.g.:

    'use strict';
    require('gulp-angular-library-builder')({
        name: 'library-name',
        repository: 'https://github.com/bower-dist-repository.git'
    });

The ``name`` is going to be the name of the library. In the above example a file named ``library-name.js`` is going to be created as part of the distribution.

The ``repository`` is the Git repository to contain the distribution files - _not_ the repository containing the source code.

## Init
Install dependent modules for the toolchain (gulp)

1. $ npm install

## Release and prerelease
Dist as bower component to git

1. $ gulp release
2. $ gulp prerelease

## Developing 
Run the module in a local development environment

1. $ gulp serve
