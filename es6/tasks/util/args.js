import yargs from 'yargs';

const args = yargs

//区分开发环境或者线上环境（gulp -production）
  .option('production',{
    boolean:true,
    default:false,
    describe:'min all scripts'
  })

  //设置要不要热更新
  .option('watch',{
    boolean:true,
    default:false,
    describe:'watch all files'
  })

  //设置是否需要输出编译日志
  .option('verbose',{
    boolean:true,
    default:false,
    describe:'log'
  })

  //追踪报错位置的
  .option('sourcemaps',{
    describe:'force the creation of sroucemaps'
  })

  //设置服务的端口
  .option('port',{
    string:true,
    default:8080,
    describe:'server port'
  })

  .argv

export default args;
