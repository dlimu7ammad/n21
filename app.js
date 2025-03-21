// // OBJect
// const obj1 = {};
// console.log(obj1);

// const fruits = new Object();
// console.log(fruits);
// console.log(typeof fruits);

// const mevalar = {
//   nomi: "olma", //property key: value
//   narxi: 12000,
//   rangi: "qizil,",
//   "sirin meva": true,
//   2: `meva`,
//   2: "ikki str",
// };

// console.log(mevalar);
// console.log(mevalar.nomi);
// console.log(mevalar["nomi"]);

// console.log(mevalar["sirin meva"]);
// console.log(mevalar["nomi"]);

// mevalar.narxi = 10000;
// mevalar.madein = "uzb"

// console.log(mevalar);

// const box = {
//   material: "paper",
//   color: ["white ", "green", "blue"],
//   size: {
//     width: 20,
//     height: 20,
//     length: 10,
//   },
// };

// console.log(box);
// console.log(box.color[1]);
// console.log(box.size.height);

// console.log(box?.size?.length);
// if ("size" in box) {
//   console.log(box.size.length);
// }

// for (const key in box) {
//   console.log(key);
//   console.log(box[key]);
// }

// const box = {
//   material: "paper",
//   color: ["white ", "green", "blue"],
//   size: {
//     width: 20,
//     height: 20,
//     length: 10,
//   },
// };

// const quti = box;
// quti.material = "iron";
// console.log(box);

// console.log(box == quti);

// const box1 = Object.assign({}, box);
// box1.material = "wood";
// console.log(box);
// console.log(box1);
// console.log(box == box1);

// const box2 = {};
// Object.assign(box2, box);
// console.log(box == box2);

// const box3 = { ...box1, ...quti, ...box2 };
// console.log(box3);

// const player = {
//   name: "Abbos",
//   number: "21",
//   age: 22,
//   boots: ["nike", "adidas"],
//   aboutPlayer: function () {
//     console.log(`ismi: ${this.name}, yoshi ${this.age} `);
//   },
//   aboutPlayer2: function () {
//     console.log(`ismi: ${this.name}, yoshi ${this.age} `);
//   },
// };

// console.log(player);
// player.aboutPlayer();
// player.aboutPlayer2();

// const newPlayer = { ...player };
// (newPlayer.name = "Abduqodir"), (newPlayer.age = 21);

// newPlayer.aboutPlayer()

// const car = {
//   marka: "BMW",
//   model: "x7",
//   year: 2024,
//   speed: 260,
//   color: "gray",
// };

// console.log("km" in car);

// for (const key in car) {
//   if (typeof car[key] == "string") {
//     console.log(key, car[key]);
//   }
// }

// for (const key in car) {
//   if (typeof car[key] == "number") {
//     console.log(key, car[key]);
//   }
// }

// const user = {
//   last_name: "Komilov",
//   first_name: "Zafar",
//   getFirstname() {
//     return this.first_name;
//   },
//   setFirstname(newName) {
//     this.first_name = newName;
//   },
//   get first_name() {
//     return this.first_name;
//   },
// };

// console.log(user);
// user.setFirstname("zafarjon");

const product = {
  nomi: "banana",
  miqdori: 2200,
  price: 24_000,
  productInfo(){
    console.log(`name: ${product.nomi}\nquantity: ${product.miqdori} kg\nprice ${product.price}`);
  }
};
