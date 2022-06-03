//log all pais of array
const boxes = ['a', 'b', 'c', 'd'];

const allpair = (array) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            console.log(`Pairs are ${array[i]} ${array[j]}`)
        }
    }
}

allpair(boxes)
// NOTE: it's O(n*n)
// O(n^2)