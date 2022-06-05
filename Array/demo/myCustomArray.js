class MyCustomArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    get(index) {
        return this.data[index]
    }

    //CODE WRITTEN BY ME
    push(item) {
        this.data[this.length] = item;
        this.length++;
    }

    //CODE BY TUTOR
    // pop() {
    //     const lastItem = this.data[this.length - 1];
    //     delete this.data[this.length - 1];
    //     this.length--;
    //     return lastItem;
    //   }

    pop() {
        delete this.data[this.length - 1];
        this.length--;
    }

    //CODE WRITTEN BY ME
    deleteAtIndex(index) {
        delete this.data[index];
        this.length--;
        this.shiftIndex(index)
    }

    shiftIndex(index) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
    }

    //CODE BY TUTOR
    // deleteAtIndex(index) {
    //     const item = this.data[index];
    //     this.shiftItems(index);
    //     return item;
    // }
    // shiftItems(index) {
    //     for (let i = index; i < this.length - 1; i++) {
    //         this.data[i] = this.data[i + 1];
    //     }
    //     console.log(this.data[this.length - 1]);
    //     delete this.data[this.length - 1];
    //     this.length--;
    // }
}

const myArray = new MyCustomArray();

for (let i = 0; i < 10; i++) {
    myArray.push(Math.floor(Math.random() * 100));
}

myArray.pop();

console.log(myArray)