{
  let obj={
    time:'2017-03-11',
    name:'net',
    _r:123
  };

  let monitor=new Proxy(obj,{
    // 拦截对象属性的读取
    get(target,key){
      return target[key].replace('2017','2018')
    },
    // 拦截对象设置属性
    set(target,key,value){
      if(key==='name'){
        return target[key]=value;
      }else{
        return target[key];
      }
    },
    // 拦截key in object操作
    has(target,key){
      if(key==='name'){
        return target[key]
      }else{
        return false;
      }
    },
    // 拦截delete
    deleteProperty(target,key){
      if(key.indexOf('_')>-1){
        delete target[key];
        return true;
      }else{
        return target[key]
      }
    },
    // 拦截Object.keys,Object.getOwnPropertySymbols,Object.getOwnPropertyNames
    ownKeys(target){
      return Object.keys(target).filter(item=>item!='time')
    }
  });

  console.log('get',monitor.time);

  monitor.time='2018';
  monitor.name='mukewang';
  console.log('set',monitor.time,monitor);

  console.log('has','name' in monitor,'time' in monitor);

  // delete monitor.time;
  // console.log('delete',monitor);
  //
  // delete monitor._r;
  // console.log('delete',monitor);
  console.log('ownKeys',Object.keys(monitor));

}

{
  let obj={
    time:'2017-03-11',
    name:'net',
    _r:123
  };

  console.log('Reflect get',Reflect.get(obj,'time'));
  Reflect.set(obj,'name','mukewang');
  console.log(obj);
  console.log('has',Reflect.has(obj,'name'));
}

{
  function personProxy(_person,validators){
    return new Proxy(_person,{
      _validators:validators,
      set:function(_person,key,value){
        if(Reflect.has(_person,key)){
          if(this._validators[key](value)){
            return Reflect.set(_person,key,value);
          }
          else{
            throw console.error(`无法为${key}设置值${value}`);
            return false;
          }
        }
        else{
          throw console.error(`没有找到${key}`);
          return false;
        }
        
      }
    });
  }

  let personValidators = {
    _name(value){
      return typeof value == 'string';
    },
    _age(value){
      return typeof value == 'number' &&Number.isInteger(value)&&value<150&&value>0;
    }
  }

  class person{
    constructor(name,age){
      this._name = undefined;
      this._age = undefined;
      let _p  = personProxy(this,personValidators);
      _p._name = name;
      _p._age = age;
      return _p;
    }
  }

  let lee = new person('lee',25);
  lee._age = 151;
}
