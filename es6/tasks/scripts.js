import gulp from 'gulp';//引入gup
import gulpif from 'gulp-if';//gulp的语句中处理if判断的包
import concat from 'gulp-concat';//处理文件拼接的
import webpack from 'webpack';//打包的
import gulpWebpack from 'webpack-stream';//和webpack配合使用的
import named from 'vinyl-named';//对文件重命名处理包
import livereload from 'gulp-livereload';//热更新包即浏览器不刷新自动更新的
import plumber from 'gulp-plumber';//处理文件信息流的包
import rename from 'gulp-rename';//对文件重命名的包
import uglify from 'gulp-uglify';//处理js css 压缩的包
import {log,colors} from 'gulp-util';//命令行输出的包
import args from './util/args';//命令行参数进行解析的包

gulp.task('scripts',()=>{
  return gulp.src(['src/js/index.js'])
    .pipe(plumber({
      errorHandle:function(){

      }
    }))
    .pipe(named())
    .pipe(gulpWebpack({
      module:{
        loaders:[{
          test:/\.js$/,
          loader:'babel-loader'
        }]
      }
    }),null,(err,stats)=>{
      log(`Finished '${colors.cyan('scripts')}'`,stats.toString({
        chunks:false
      }))
    })
    .pipe(gulp.dest('server/public/js'))
    .pipe(rename({
      basename:'cp',
      extname:'.min.js'
    }))
    .pipe(uglify({compress:{properties:false},output:{'quote_keys':true}}))
    .pipe(gulp.dest('server/public/js'))
    .pipe(gulpif(args.watch,livereload()))
})
