import { Category } from './enums';
import { Book, Logger, Author, Librarian, Magazine } from './interfaces';
import { UniversityLibrarian, ReferenceItem, Shelf } from './classes';
import RefBook from './classes/encyclopedia';
import {
  purge,
  getAllBooks,
  logFirstAvailable,
  getBookTitlesByCategory,
  logBookTitles,
  getBookByID,
  createCustomerID,
  createCustomer,
  checkoutBooks,
  getTitles,
  printBook,
  logCategorySearch,
  getBooksByCategory,
  getBooksByCategoryPromise,
  logSearchResults
} from './lib/utility-function';

showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
  const elt = document.getElementById(divName);
  elt.innerText = `Hello from ${name}`;
}

// =======================================================



// =======================================================

// Task 01
// logFirstAvailable(getAllBooks());

// Task 02
// logBookTitles(getBookTitlesByCategory(Category.Javascript));

// Task 03
// const titles = getBookTitlesByCategory(Category.Javascript);
// titles.forEach(title => console.log(title));
// const book = getBookByID(2);
// console.log(book);

// Task 04
// let myID: string = createCustomerID('Ann', 10);
// console.log(myID);
// let idGenerator: (name: string, id: number) => string;
// idGenerator = (name: string, id: number) => `${name}${id}`;
// idGenerator = createCustomerID;
// myID = idGenerator('Ann', 100);
// console.log(myID);

// Task 05
// createCustomer('Ann');
// createCustomer('Ann', 30);
// createCustomer('Ann', 30, 'Nizhny');
// createCustomer('Ann', undefined, 'Nizhny');
// const titles = getBookTitlesByCategory();
// console.log(titles);

// logFirstAvailable();

// let myBooks = checkoutBooks('Ann');
// console.log(myBooks);
// myBooks = checkoutBooks('Ann', 1, 2, 4);
// console.log(myBooks);

// Task 06
// const titles = getTitles(false);
// console.log(titles);

// Task 07
// printBook(getBookByID(1));
// const myBook: Book = {
//   id: 5,
//   title: 'Colors, Backgrounds, and Gradients',
//   author: 'Eric A. Meyer',
//   available: true,
//   category: Category.CSS,
//   pages: 200,
//   markDamaged: (reason: string) => console.log(`Damaged: ${reason}`)
// };
// printBook(myBook);
// myBook.markDamaged(`missing back cover`);

// Task 08, 15
// const logDamage: Logger = (reason: string) => console.log(`Damaged: ${reason}`);
// logDamage(`missing back cover`);

// Task 09
// const favoriteAuthor: Author = {
//   email: 'anna@example.com',
//   name: 'Anna',
//   numBooksPublished: 2
// }

// const favoriteLibrarian: Librarian = {
//   email: 'anna@example.com',
//   name: 'Anna',
//   departmant: 'Classical Literature',
//   assistCustomer: (name: string) => console.log(name)
// }

// Task 10, 21, 22
// const favoriteLibrarian: Librarian = new UniversityLibrarian();
// favoriteLibrarian.name = 'Anna';
// favoriteLibrarian.assistCustomer('Boris');
// 22
// favoriteLibrarian.printLibrarian();

// Task 11
// const ref: ReferenceItem = new ReferenceItem('Title', 2019);
// ref.printItem();
// ref.publisher = 'Anna';
// console.log(ref.publisher);

// Task 12, 13
// const refBook: Encyclopedia = new Encyclopedia('My Title', 2019, 10);
// console.log(refBook);
// refBook.printItem();
// refBook.printCitation();

// Task 16
// const refBook: RefBook = new RefBook('My Title', 2019, 10);
// console.log(refBook);
// refBook.printItem();
// refBook.printCitation();

// Task 18
// const inventory: Array<Book> = [
//   {
//     id: 10,
//     title: 'The C Programming Language',
//     author: 'K & R',
//     available: true,
//     category: Category.Software
//   },
//   {
//     id: 11,
//     title: 'Code Complete',
//     author: 'Steve McConnell',
//     available: true,
//     category: Category.Software
//   },
//   {
//     id: 12,
//     title: '8-Bit Graphics with Cobol',
//     author: 'A. B.',
//     available: true,
//     category: Category.Software
//   },
//   {
//     id: 13,
//     title: 'Cool autoexec.bat Scripts!',
//     author: 'C. D.',
//     available: true,
//     category: Category.Software
//   }
// ];
// let result: any[] = purge<Book>(inventory);
// console.log(result);
// result = purge<number>([1, 2, 3, 4]);
// console.log(result);

// Task 19
// const bookShelf: Shelf<Book> = new Shelf<Book>();
// inventory.forEach(book => bookShelf.add(book));
// const firstBook: Book = bookShelf.getFirst();
// console.log(firstBook);

// const magazines: Array<Magazine> = [
//   { title: 'Programming Language Monthly', publisher: 'Code Mags' },
//   { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
//   { title: 'Five Points', publisher: 'GSU' }
// ];

// const magazineShelf: Shelf<Magazine> = new Shelf<Magazine>();
// magazines.forEach(mag => magazineShelf.add(mag));
// const firstMag: Magazine = magazineShelf.getFirst();
// console.log(firstMag);

// Task 20
// magazineShelf.printTitles();
// const o = magazineShelf.find(`Five Points`);
// console.log(o);

// Task 23
// const favoriteLibrarian = new UniversityLibrarian();
// favoriteLibrarian.name = 'Anna';
// favoriteLibrarian.assistFaculty = () => console.log('Changed 1');
// favoriteLibrarian.assistFaculty();
// favoriteLibrarian.teachCommunity = () => console.log('Changed 2');

// Task 24
// const refBook: RefBook = new RefBook('My Title', 2019, 10);
// refBook.printItem();

// Task 25, 26
// const favoriteLibrarian = new UniversityLibrarian();
// favoriteLibrarian.name = 'Anna';
// favoriteLibrarian.assistCustomer('Boris');

// Task 27
// const refBook: RefBook = new RefBook('My Title', 2019, 10);
// console.log(refBook);
// refBook.copies = 5;
// refBook.copies = -10;
// console.log(refBook);

// Task 28
// console.log('Start');
// getBooksByCategory(Category.Javascript, logCategorySearch);
// getBooksByCategory(Category.Software, logCategorySearch);
// console.log('Finish');

// Task 29
// console.log('Start');
// getBooksByCategoryPromise(Category.Javascript)
//   .then(titles => {
//     console.log(titles);
//     // return titles.length;
//     throw new Error('!!')
//   })
//   .then(count => console.log(count))
//   .catch(err => console.log(err))
//   .finally(() => console.log('Complete'));
// getBooksByCategoryPromise(Category.Software)
//   .then(titles => console.log(titles))
//   .catch(err => console.log(err))
//   .finally(() => console.log('Complete'));
// console.log('Finish');

// Task 30
// console.log('Beginning search...');
// logSearchResults(Category.Javascript)
//   .catch(reason => console.log(reason));
// console.log('Search submitted...');

// Task 31
const favoriteLibrarian = new UniversityLibrarian();
favoriteLibrarian.email = 'Anna@example.com';
favoriteLibrarian.assistCustomerEmail('Boris@example.com');
