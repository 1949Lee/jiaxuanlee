import gulp from 'gulp';
import gulpSequence from 'gulp-sequence';

//注意顺序
gulp.task('build',gulpSequence('clean','css','pages','scripts',['browser','serve']));
