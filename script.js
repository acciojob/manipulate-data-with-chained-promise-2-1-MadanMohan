function transformArray() {
  // Step 1: Initial Promise - resolves after 3 seconds with array [1, 2, 3, 4]
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);
    }, 3000);
  })
  .then((data) => {
    // Step 2: Filter even numbers
    const evenNumbers = data.filter(num => num % 2 === 0);

    // Return a promise that resolves after 1 second with even numbers
    return new Promise((resolve) => {
      setTimeout(() => {
        document.getElementById("output").innerText = evenNumbers.join(',');
        resolve(evenNumbers);
      }, 1000);
    });
  })
  .then((evenNumbers) => {
    // Step 3: Multiply even numbers by 2
    const multiplied = evenNumbers.map(num => num * 2);

    // Return a promise that resolves after 2 seconds with multiplied array
    return new Promise((resolve) => {
      setTimeout(() => {
        document.getElementById("output").innerText = multiplied.join(',');
        resolve(multiplied);
      }, 2000);
    });
  });
}

// Run the function when the page loads
transformArray();
