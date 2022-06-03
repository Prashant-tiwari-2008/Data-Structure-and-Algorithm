/**
 * Question.
 * merge two array 
 * i/p => arr1[1,2,3] && arr2[4,5,6]
 * o/p => finalarr[1,2,3,4,5,6]
 */

//My solution
// class MergeSortedArrays {
//     constructor() {
//         this.arr1 = [];
//         this.arr2 = [];
//     }

//     mergeArray(arr1, arr2) {
//         if (arr1.length === 0) {
//             return arr1;
//         }
//         if (arr2.length === 0) {
//             return arr2;
//         }
//         const mergerdArray = [...arr1, ...arr2];
//         console.log(mergerdArray);
//     }
// }

// const mergeSortedArrays = new MergeSortedArrays();
// mergeSortedArrays.mergeArray([1, 2, 3, 4, 5], [6, 7, 8, 9, 10])

//Tutor solution
function mergeSortedArrays(array1, array2) {
    if (array1.length === 0) {
        return array2;
    }
    if (array2.length === 0) {
        return array1;
    }
    const mergedArray = [];
    let array1Item = array1[0];
    let array2Item = array2[0];
    let i = 1;
    let j = 1;

    while (array1Item || array2Item) {
        if (array2Item === undefined || array1Item < array2Item) {
            mergedArray.push(array1Item);
            array1Item = array1[i];
            i++;
        }
        else {
            mergedArray.push(array2Item);
            array2Item = array2[j];
            j++;
        }
    }
    console.log(mergedArray)
    return mergedArray;
}

mergeSortedArrays([0, 3, 4, 31], [3, 4, 6, 30]);