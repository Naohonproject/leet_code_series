// cho b bong den va mot nut bam, n la so lan bam nut
// den thu 1 se chuyen tu sang sang ta va nguoc lai cho moi lan bam
// den thu m+1 se (n>m>0) se chuyen trang thai neu den thu m chuyen trang thai tu sang sang tat

// define
function switchLightBulb(arr, n) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = n % 2 === 1 ? Number(!arr[i]) : arr[i];
    n = Math.floor(n / 2);
  }
  return arr;
}

// try it
const arr = [0, 0, 0];
const arr1 = [0, 0];
console.log(switchCase(arr, 6));
console.log(switchCase(arr1, 5));
