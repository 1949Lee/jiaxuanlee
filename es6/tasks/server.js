import gulp from 'gulp';
import gulpif from 'gulp-if';
import liveserver from 'gulp-live-server';
import args from './util/args';

//创建服务的任务
gulp.task('serve',(cb)=>{
  if(!args.watch) return cb();

  //如果是监听的创建一个服务器，运行server/bin/www.js
  var server = liveserver.new(['--harmony','server/bin/www']);
  server.start();

  //监听server/public/js  /css
  gulp.watch(['server/public/**/*.js','server/views/**/*.ejs'],function(file){
    server.notify.apply(server,[file]);
  })

  //监听到路由变化后是服务重启
  gulp.watch(['server/routes/**/*.js','server/app.js'],function(){
    server.start.bind(server)()
  });
})
