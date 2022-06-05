/**
 * Task :- Creating custome hash table
 * with set method which set the value with key
 * and get method which return valud with key
 */


/**
 * Solution:- in set method we help of hash function
 * create a hashvalue and in array in that place
 * saving the value and later with that value
 * we get the data form array
 */
class MyHashTable {
    constructor(size) {
        this.data = new Array(size)
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) %
                this.data.length
        }
        return hash;
    }

    /**
     * here we have to store value in the array
     * @param { key } indexName 
     * @param { value} actualValue 
     */
    set(indexName, actualValue) {
        const hashvalue = this._hash(indexName);
        if (!this.data[hashvalue]) {
            this.data[hashvalue] = [];
        }
        //if we push data like this then we can't get data
        // the key -- see the solution down side
        this.data[hashvalue].push(actualValue);
        //WHY WE ARE RETURNING ANY THING FROM HERE
    }

    /**
     * here we are trying to get the data from the arra
     * @param {key} indexName 
     */
    get(indexName) {
        //if we get data like this then only one data can be extracted
        //but if the multiple data is sotred at the same place 
        // as it is soted with linked list
        const hashvalue = this._hash(indexName);
    }

    /**
     * it must return the all key of the hashtable
     */
    key() {
        const keysArray = [];
        for (let i = 0; i < (this.data.length - 1); i++) {
            if (this.data[i]) {
                console.log(this.data[i], "key ")
            }
        }
    }
}

const mycustomHashTable = new MyHashTable(50);
mycustomHashTable.set('Prashant', 3000);
mycustomHashTable.set('Pradeep', 4000);
mycustomHashTable.set('Sweta', 6000);
mycustomHashTable.set('sandeep', 7000);
mycustomHashTable.get('Prashant');
mycustomHashTable.key();


// TUTOR SOLUTION
class HashTable {
    constructor(size) {
        this.data = new Array(size);
        // this.data = [];
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash;
    }

    set(key, value) {
        let address = this._hash(key);
        if (!this.data[address]) {
            this.data[address] = [];
        }
        this.data[address].push([key, value]);
        return this.data;
    }

    get(key) {
        const address = this._hash(key);
        const currentBucket = this.data[address]
        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) {
                    console.log(currentBucket[i][0])
                    console.log(currentBucket[i][1])
                    return currentBucket[i][1]
                }
            }
        }
        return undefined;
    }
}

//   const myHashTable = new HashTable(50);
//   myHashTable.set('grapes', 10000)
//   myHashTable.get('grapes')
//   myHashTable.set('apples', 9)
//   myHashTable.get('apples')