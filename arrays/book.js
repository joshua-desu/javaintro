let book = {
    title: "In The Miso Soup",
    pages: 200,
    readCount: 1,
    output: function () {
        return this.title + " is " + this.pages + " pages long and was read " + 
        this.readCount + " times.";
    },
}

console.log(book.output())