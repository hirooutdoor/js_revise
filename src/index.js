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
const myProfile1 = [`Jack`, 22];
const message3 = `私は${myProfile1[0]}です。年齢は${myProfile1[1]}です。`;

//分割代入。※配列はオブジェクトのように中身の要素の名前が決まっていないので、配置した順番で受け取ることになる
const [name, age] = myProfile1;

//一番目のnameに、同じく１番目に格納されている'Jack'が代入され、２番目のageに同じく2番目に格納されている22が代入される
const message4 = `私は${name}です。年齢は${age}です。`;
console.log(message4);
