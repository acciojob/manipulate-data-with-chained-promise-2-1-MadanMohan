function isOdd(num) {
  return num % 2 !== 0;
}
function isEven(num) {
  return num % 2 === 0;
}

let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve([1, 2, 3, 4]);
  }, 3000);
});

promise.then((data) => {
  let ans = data.filter(isOdd);

  setTimeout(() => {
    let element = document.getElementById("output");
    element.value = ans.join(", "); // show as comma-separated
  }, 1000); // 1 second delay
}).then((data) => {
  let ans = data.filter(isEven);

  setTimeout(() => {
    let element = document.getElementById("output");
    element.value = ans.join(", "); // show as comma-separated
  }, 2000); // 1 second delay
});
