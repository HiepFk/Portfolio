// Hàm chạy ở file index
// Chạy kiểu chữ
const test = [
  " Nguyễn Huy Hiệp.",
  // " Developer.",
  // " Fucker.",
  // " Nothing When Fall In Love.",
];
let title = "";
let i = 0;
let m = 0;
const span = document.querySelector("span");

const timer = setInterval(function () {
  dataTest = test[m];
  let dataArray = dataTest.split("");
  if (title === test[test.length - 1] + "|") {
    i = 0;
    m = 0;
    title = "";
  }
  if (title === dataTest + "|") {
    i = 0;
    m++;
    //back("Nguyễn Huy Hiêp.",span);
    title = "";
  }
  title = title.replace("|", "") + dataArray[i] + "|";
  span.innerText = title;
  i++;
}, 200);

// function back(title2,span)
// {
//     const timer2 = setInterval(function()  {
//     if(title2==="N|")
//     {
//       clearInterval(timer2);
//     }
//     title2 = title2.slice(0, -2)+"|";
//     span.innerText=title2;
//     },40)
