const db = require('./db')
const Author = require('./Author')
const Book = require('./Book')
// require each of your models here...

// ...and give them some nice associations here!
Author.hasMany(Book)
Book.belongsTo(Author)

module.exports = {
  db,
  Book,
  Author
}
