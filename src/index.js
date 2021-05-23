// const myProfile = {
//   name: "Jack",
//    age: 22
// }

// //オブジェクト

// // 普通の記法
// const message = "私は" + myProfile.name + 　"です。年齢は" + myProfile.age + "です。";

// // テンプレート文字列（+でいちいち区切って書くのが面倒・・・）
// const message1 = `私は${myProfile.name}です。年齢は${myProfile.age}です。`;

// // 分割代入(destructuring)での書き方（myProfile.nameとか.ageとか書くの面倒だし、長くて読みづらい・・・）
// const {name, age} = myProfile;

// const message2 = `私は${name}です。年齢は${age}です。`;
// // スッキリ！コードも見やすい。Reactでも分割代入をよく用いるのでこれらの記法に慣れておく

// console.log(message2);

// //オブジェクトだけでなく配列にも使用可能

//まずは普通に
// const myProfile1 = [`Jack`, 22];
// const message3 = `私は${myProfile1[0]}です。年齢は${myProfile1[1]}です。`;

// //分割代入。※配列はオブジェクトのように中身の要素の名前が決まっていないので、配置した順番で受け取ることになる
// const [name, age] = myProfile1;

// //一番目のnameに、同じく１番目に格納されている'Jack'が代入され、２番目のageに同じく2番目に格納されている22が代入される
// const message4 = `私は${name}です。年齢は${age}です。`;
// console.log(message4);

//デフォルト・引数
// const sayHello = (name ="おやじ") => console.log(`こんにちは！${name}さん！`);
// sayHello();

//【スプレッド構文】

//配列の展開
// const arr1 = [1, 2];
// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// 配列をまとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2 ;
// console.log(arr3);

// //配列をコピーする
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4, ...arr5];
// console.log(arr6);

//mapやfilterを使った配列の処理
//これを使うことで従来のfor文を使わなくなった
const nameArr = ["田中", "山田", "新垣"];
//ちなみにfor文ではこのような書き方をする
// for (let i = 0; i < nameArr.length; i++) {
//   console.log(nameArr[i])
// }

// //mapを使用して配列を返す方法（基本）
// const nameArr2 = nameArr.map((name)=> {
//   return name;
// })
// console.log(nameArr2);

//mapを使用してconsoleに配列を１つずつ出力する方法
//一行で済む場合は{}を省略できる
// nameArr.map((name) => console.log(name));

//filter
//何か条件に一致するものだけを取り出す
// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 0;
// });

// console.log(newNumArr);

//indexを指定する方法
//for文の場合
// for (let i = 0; i < nameArr.length; i++) {
//   console.log(`${i + 1}番目は${nameArr[i]}です`)
// }

//mapの場合
//map()の２番目の引数にindexを取ることができる
// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です。`));

const newNameArr = nameArr.map((name) => {
  if (name === "新垣") {
    return `${name}さん`;
  } else {
    return name;
  }
});

console.log(newNameArr);

const num = 194999203992;
const formattedNum =
  typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
console.log(formattedNum);

const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? "100を超えています" : "許容範囲内です";
};

console.log(checkSum(20, 12));
