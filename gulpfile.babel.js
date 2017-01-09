/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */
import gulp from 'gulp';

// Load custom Gulp tasks
const fs = require('fs');
fs.readdirSync('gulp/tasks').forEach(file => require(`./gulp/tasks/${file}`));

gulp.task('build', gulp.series('clean', gulp.parallel('scripts', 'html')));
gulp.task('default', gulp.series('build', 'sw'));