{
  //获取区
  let initNewData = function() {
    let promise = new Promise(function(resolve, reject) {
      let xhr = new XMLHttpRequest();
      xhr.open("get", "http://localhost:3000/top/album?offset=0&limit=30");
      xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
          resolve(JSON.parse(xhr.responseText));
        }
      };
      xhr.send();
    });
    return promise;
  };
  let initAlbumData = function(id) {
    let promise = new Promise(function(resolve, reject) {
      let xhr = new XMLHttpRequest();
      xhr.open("get", `http://localhost:3000/album?id=${id}`);
      xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
          resolve(JSON.parse(xhr.responseText));
        }
      };
      xhr.send();
    });
    return promise;
  };

  async function music (){
    let newAlbum = await initNewData();
    console.log(await initAlbumData(newAlbum.albums[0].id))
    // return newAlbum;
  }
  music();

  // initNewData()
  // .then((district)=>{
  //     console.log(district);
  //     // return initTownData(district);
  // })
  // .then((town)=>{
  //     console.log('更新镇列表至HTML视图');
  //     return initSchoolData(town);
  // })
  // .then((school)=>{
  //     console.log('更新学校列表至HTML视图');
  //     return;
  // })
  // .catch(function(err){//捕获错误。
  //     console.log('catch',err);
  // });
}
