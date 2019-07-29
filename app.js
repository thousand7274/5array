// * 生年月日を入力したら生まれた日の曜日が出る
// * 五次元配列

// console.log(days);
// let date = new Date();
// console.log(date);
// let today = '' + date.getFullYear() + ('0' + (date.getMonth() + 1 )).slice(-2) + date.getDate();
// console.log(today);
function userBirthday(){
  let week = ['日曜日','月曜日','火曜日','水曜日','木曜日','金曜日','土曜日'];
  let inputYear = document.getElementById('userYear').value;
  let inputMonth = document.getElementById('userMonth').value;
  let inputDate = document.getElementById('userDate').value;
  let userDate = new Date(inputYear, inputMonth - 1,inputDate);
  alert(`指定された「${userDate.getFullYear()}年${(userDate.getMonth()+1)}月${userDate.getDate()}日は` + week[userDate.getDay()] + 'です。');}


// 5次元配列

// Array1d['yamada','sato','suzuki'];

// Array2d[['yamada','sato','suzuki'],
//         [123,456,789]];

// array3d[[['yamda','sato','suzuki'],[123,456,789]],
//         [['dog','cat','bird'],[100,200,300]]];

// array4d [[[['yamada','sato','suzuki'],[123,456,789]],[['dog','cat','bird'],[100,200,300]]],
//         [[['kinjo','higa','ooshiro'],[400,500,600]],[['koara','goat','pig'],[700,800,900]]]];

let array5d = [[[[['yamada','sato','suzuki'],[123,456,789]],[['dog','cat','bird'],[100,200,300]]],[[['kinjo','higa','ooshiro'],[400,500,600]],[['koara','goat','pig'],[700,800,900]]]],[[[['nishiwaki','oomoto','kashino'],[111,222,333]],[['elephant','monkey','bear'],[444,555,666]]],[[['nakata','sakurai','mineta'],[777,888,999]],[['lion','tiger','camel'],[121,232,343]]]]];

console.log(array5d);