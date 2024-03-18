
const books = [
    {
        title: 'Book',
        author: 'Name'
    },
    {
        title: 'Book2',
        author: 'Name2'
    },
    {
        title: 'Book3',
        author: 'Name3'
    }
]



/* Long Way */
function getTheTitles(array) {
    return array.map(function (book) {
        return `${book.title}`;
    })
}



/* Short Way - You Can't Pass Other Arrays to this easily */
const getTheTitles = books.map((book) => `${book.title}`);



/* Another Way */
const getTheTitles = function (array) {
    return array.map((book) => book.title);
};




// Do not edit below this line
module.exports = getTheTitles;
