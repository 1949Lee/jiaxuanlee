{
  // genertaor基本定义
  let tell=function* (){
    yield 'a';
    yield 'b';
    return 'c'
  };

  let k=tell();

  console.log(k.next());
  console.log(k.next());
  console.log(k.next());
  console.log(k.next());
}

{
  let obj={};
  obj[Symbol.iterator]=function* (){
    yield 1;
    yield 2;
    yield 3;
  }

  for(let value of obj){
    console.log('value',value);
  }
}

{
  let state=function* (){
    while(1){
      yield 'A';
      yield 'B';
      yield 'C';
    }
  }
  let status=state();
  console.log(status.next());
  console.log(status.next());
  console.log(status.next());
  console.log(status.next());
  console.log(status.next());
}

// {
//   let state=async function (){
//     while(1){
//       await 'A';
//       await 'B';
//       await 'C';
//     }
//   }
//   let status=state();
//   console.log(status.next());
//   console.log(status.next());
//   console.log(status.next());
//   console.log(status.next());
//   console.log(status.next());
// }
{
  let getData = function*() {
    while (true) {
      yield new Promise((resolve, recject) => {
        //这里是用settimeout来模拟数据，实际中需要使用AJAX请求
        setTimeout(() => {
          resolve({ code: 201, result: 1 });
        }, 200);
      });
    }
  };
  let gen = getData();

  let pull = time => {
    let step = gen.next();
    step.value.then(data => {
      if (data.code == 200) {
        console.log(data);
        return;
      } else {
        console.info("查询中");
        setTimeout(() => {
          pull(time);
        }, time);
      }
    });
  };
  pull(1000);
}