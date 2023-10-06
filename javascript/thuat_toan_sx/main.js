// Sắp xếp từ nhỏ đến lớn
// 1. Array sorting với sắp xếp chọn trực tiếp - Selection Sort x

// function selectionSort(array) {
//   for (let i = 0; i < array.length - 1; i++) {
//     min = i;
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[j] < array[i]) {
//         min = j;
//       }
//       if (min != i) {
//         let temp = array[j];
//         array[j] = array[i];
//         array[i] = temp;
//       }
//     }
//     return array;
//   }
// }
// const arr = [100, 76, 8, 1234, 10];
// const result = selectionSort(arr);
// console.log(result);

// function selectionSort(array) {
//   for (let i = 0; i < array.length - 1; i++) {
//     let idmin = i;
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[j] < array[idmin]) idmin = j; // 76<100 => admin = 1
//     }
//     // swap
//     console.log(i); //0
//     let t = array[i]; // t =100
//     array[i] = array[idmin]; // array[i] = 100
//     array[idmin] = t; // array[idmin] = 100
//   }
//   return array;
// }
// const arr = [100, 76, 8, 1234, 10];
// const result = selectionSort(arr);
// console.log(result);

// 2. Sắp xếp chèn trực tiếp - Insertion Sort x
// function insertionSort(array) {
//   for (let i = 1; i < array.length; i++) {
//     let j = i - 1;
//     let temp = array[i];
//     while (temp < array[j] && j >= 0) {
//       array[j + 1] = array[j];
//       j--;
//     }
//     array[j + 1] = temp;
//   }
//   return array;
// }

// function insertionSort(array) {
//   let pos, x;
//   for (let i = 1; i < array.length; i++) {
//     pos = i - 1;
//     x = array[i];
//     while (pos >= 0 && array[pos] > x) {
//       array[pos + 1] = array[pos];
//       pos--;
//     }
//     array[pos + 1] = x;
//   }
//   return array;
// }

// const arr = [100, 76, 8, 1234, 10];
// console.log(arr.length);
// const result = insertionSort(arr);
// console.log(result);

// 3. Sắp xếp chèn trực tiếp dựa trên tìm kiếm nhị phân - Binary Insertion Sort
// function binaryInsertionSort(array) {
//   let l, r, m, x;
//   for (let i = 1; i < array.length; i++) {
//     l = 0;
//     r = i - 1;
//     x = array[i];

//     while (l <= r) {
//       m = Math.floor((l + r) / 2);
//       if (array[m] > x) r = m - 1;
//       else l = m + 1;
//     }

//     for (let j = i; j > l; j--) array[j] = array[j - 1];
//     array[l] = x;
//   }
//   return array;
// }
// const arr = [100, 76, 8, 1234, 10];
// const result = binaryInsertionSort(arr);
// console.log(result);

// 4. Sắp xếp đổi chỗ trực tiếp - Interchange Sort
// function interChangeSort(array) {
//   for (let i = 0; i < array.length - 1; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[j] < array[i]) {
//         let t = array[i];
//         array[i] = array[j];
//         array[j] = t;
//       }
//     }
//   }
//   return array;
// }

// const arr = [100, 76, 8, 1234, 10];
// const result = interChangeSort(arr);
// console.log(result);

// 5. Sắp xếp nổi bọt - Bubble Sort x
// function bubbleSort(array) {
//   for (let i = 0; i < array.length - 1; i++) {
//     for (let j = array.length - 1; j > i; j--) {
//       if (array[j] < array[j - 1]) {
//         let t = array[j];
//         array[j] = array[j - 1];
//         array[j - 1] = t;
//       }
//     }
//   }
//   return array;
// }
// const arr = [100, 76, 8, 1234, 10];
// const result = bubbleSort(arr);
// console.log(result);

// 6. Thuật toán Shaker Sort
// function shakerSort(array) {
//   let left, right, k;

//   left = 0;
//   right = array.length - 1;
//   k = array.length - 1;

//   while (left < right) {
//     for (let j = right; j > left; j--) {
//       if (array[j] < array[j - 1]) {
//         let t = array[j];
//         array[j] = array[j - 1];
//         array[j - 1] = t;
//         k = j;
//       }
//     }
//     left = k;

//     for (let j = left; j < right; j++) {
//       if (array[j] > array[j + 1]) {
//         let t = array[j];
//         array[j] = array[j + 1];
//         array[j + 1] = t;
//         k = j;
//       }
//     }
//     right = k;
//   }
//   return array;
// }
// const arr = [100, 76, 8, 1234, 10];
// const result = shakerSort(arr);
// console.log(result);

// 7. Sắp xếp nhanh - Quick Sort x

function quickSort(array, left, right) {
  let l = left,
    r = right;
  let m = Math.floor((l + r) / 2);
  let pivot = array[m];

  while (l <= r) {
    while (array[l] < pivot) l++;
    while (array[r] > pivot) r--;
    if (l <= r) {
      let t = array[l];
      array[l] = array[r];
      array[r] = t;
      l++;
      r--;
    }
  }

  if (l < right) quickSort(array, l, right);
  if (r > left) quickSort(array, left, r);
}
// const arr = [100, 76, 8, 1234, 10];
// const result = quickSort(arr, 0, arr.length - 1);
// console.log(result);

const arr = [100, 76, 8, 1234, 10];
quickSort(arr, 0, arr.length - 1);
console.log(arr);

// 8. Sắp xếp trộn - Merge Sort x
// function merge(array, left, m, right) {
//   let l = left,
//     r = m + 1;
//   let tmp = [];

//   while (l <= m && r <= right) {
//     if (array[l] < array[r]) tmp.push(array[l++]);
//     else tmp.push(array[r++]);
//   }

//   while (l <= m) tmp.push(array[l++]);
//   while (r <= right) tmp.push(array[r++]);

//   for (let i = 0; i < tmp.length; i++) array[i + left] = tmp[i];
// }

// function mergeSort(array, left, right) {
//   if (left < right) {
//     let m = Math.floor((left + right) / 2);
//     mergeSort(array, left, m);
//     mergeSort(array, m + 1, right);
//     merge(array, left, m, right);
//   }
// }
// const arr = [100, 76, 8, 1234, 10];
// const result = merge(arr);
// console.log(result);

// 9. Sắp xếp vun đống - Heap Sort x
// function heapify(array, N, i) {
//   let left = 2 * i + 1,
//     right = 2 * i + 2,
//     largest;

//   if (left < N && array[left] > array[i]) largest = left;
//   else largest = i;

//   if (right < N && array[right] > array[largest]) largest = right;

//   if (largest != i) {
//     let t = array[i];
//     array[i] = array[largest];
//     array[largest] = t;
//     heapify(array, N, largest);
//   }
// }

// function buildHeap(array) {
//   let m = Math.floor(array.length / 2 - 1);
//   for (let i = m; i >= 0; i--) heapify(array, array.length, i);
// }

// function heapSort(array) {
//   buildHeap(array);

//   for (let i = array.length - 1; i >= 0; i--) {
//     let t = array[0];
//     array[0] = array[i];
//     array[i] = t;

//     heapify(array, i, 0);
//   }
// }
// const arr = [100, 76, 8, 1234, 10];
// const result = heapify(arr);
// console.log(result);
