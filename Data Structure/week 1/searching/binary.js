const array = [1, 3, 5, 7, 9, 11, 13, 15, 17];
const target = 15;
const index = binarySearch(array, target);

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid;
        }
        if (arr[mid] < target) {
            left = mid + 1;
        }
        else {
            right = mid - 1;
        }
    }
    return -1;
}
if (index !== -1) {
    console.log(`Target ${target} found at index ${index}.`);
} else {
    console.log(`Target ${target} not found.`);
}