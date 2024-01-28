// GENERATE RANDOM COLOR

let randomColor = function () {
  let hex = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  //    return color

  // for(let i of hex){
  //    if(i<=6){
  //     color +=hex[Math.floor( Math.random() * 16)]
  // }

  //    }

  return color;
};

let interValID;
let startChangingColor = function () {
  interValID = setInterval(function () {
    document.body.style.backgroundColor = randomColor();
  }, 1000);
};

let stopChangingcolor = function () {
  clearInterval(interValID);
};

document.querySelector("#start").addEventListener("click", startChangingColor);

document.querySelector("#stop").addEventListener("click", stopChangingcolor);

// *****************OR***********************

// let randomColor = function () {
//     let ColorCode = "123456789ABCDEF";

//     let Hash = "#";

//     for (let i = 0; i < 6; i++) {
//       Hash += ColorCode[Math.floor(Math.random() * 16)];
//     }
//     return Hash;
//   };
//   console.log(randomColor());

//   let IntervalId;

//   document.querySelector("#start").addEventListener("click", function () {
//     IntervalId = setInterval(() => {
//       document.body.style.backgroundColor = randomColor();
//     }, 1000);
//   });

//   document.querySelector("#stop").addEventListener("click", function () {
//     clearInterval(IntervalId);
//   });
