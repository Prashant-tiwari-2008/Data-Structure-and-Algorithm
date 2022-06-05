//Google Question 
//Given an array = [2,5,1,2,3,5,6,2,1,2,4]
//it should return 2

//Given an array = [2,1,1,2,3,4,5]
//it  shuold reutrn 1

//Given an array = [2,3,5,4]
//it shuld return undefined



const findTheRecurreingNumber = (data) => {
    if (data) {
        for (let x = 0; x < (data.length - 1); x++) {
            for (let y = x; y < (data.length - 1); y++) {
                if (data[x] === data[y]) {
                    console.log(data[x])
                    return data[x];
                } else {
                    console.log("did not found a same number")
                }
            }
        }
    } else {
        console.log("Nothing found")
    }
}

// findTheRecurreingNumber([2, 5, 1, 2, 3, 5, 6, 2, 1, 2, 4]);
findTheRecurreingNumber([2, 1, 1, 2, 3, 4, 5]); // returning 2 so failed

