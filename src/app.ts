import { Category } from './enums';
import { Book, Logger, Author, Librarian, Magazine } from './interfaces';
import { UniversityLibrarian, ReferenceItem, Shelf } from './classes';
import RefBook from './classes/encyclopedia';
import { purge } from './lib/utility-function';

showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
  const elt = document.getElementById(divName);
  elt.innerText = `Hello from ${name}`;
}

// =======================================================

function getAllBooks(): Book[] {
  let books: Array<Book> = [
    {
      id: 1,
      title: 'Refactoring JavaScript',
      author: 'Evan Burchard',
      available: true,
      category: Category.Angular
    },
    {
      id: 2,
      title: 'JavaScript Testing',
      author: 'Liang Yuxian Eugene',
      available: false,
      category: Category.CSS
    },
    {
      id: 3,
      title: 'CSS Secrets',
      author: 'Lea Verou',
      available: true,
      category: Category.Javascript
    },
    {
      id: 4,
      title: 'Mastering JavaScript Object-Oriented Programming',
      author: 'Andrea Chiarelli',
      available: true,
      category: Category.HTML
    }
  ];

  return books;
}

function logFirstAvailable(books = getAllBooks()): void {
  const numberOfBooks: number = books.length;
  let firstAvailableTitle: string = '';

  for(const book of books) {
    if (book.available) {
      firstAvailableTitle = book.title;
      break;
    }
  }

  console.log(`total books: ${numberOfBooks}`);
  console.log(`first available book title: ${firstAvailableTitle}`);
}

function getBookTitlesByCategory(category: Category = Category.Angular): string[] {
  const books = getAllBooks();
  const titles: string[] = [];

  for(const book of books) {
    if ((<any>book).category == category) {
      titles.push((<any>book).title);
    }
  }

  return titles;
}

function logBookTitles(titles: Array<string>): void {
  titles.forEach(title => console.log(title))
}

function getBookByID(id: number): Book | undefined {
  const books = getAllBooks();
  return books.find(book => book.id === id);
}

function createCustomerID(name: string, id: number): string {
  return `${name}${id}`
}

function createCustomer(name: string, age?: number, city?: string): void {
  console.log(`Customer name ${name}`);

  if (age) {
    console.log(`Customer age ${age}`);
  }

  if (city) {
    console.log(`Customer city ${city}`);
  }
}

function checkoutBooks(customer: string, ...bookIDs: number[]): string[] {
  console.log(`Customer name ${customer}`);

  const titles: string[] = [];
  for (const id of bookIDs) {
    const book = getBookByID(id);
    if (book.available) {
      titles.push(book.title);
    }
  }

  return titles;
}

function getTitles(author: string): string[];
function getTitles(available: boolean): string[];
function getTitles(bookProperty: any): string[] {
  const books = getAllBooks();

  if (typeof bookProperty === 'string') {
    return books
      .filter(book => book.author === bookProperty)
      .map(book => book.title);
  } else if (typeof bookProperty === 'boolean') {
    return books
      .filter(book => book.available === bookProperty)
      .map(book => book.title);
  }
};

function printBook(book: Book): void {
  console.log(`${book.title} by ${book.author}`);
}

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
const refBook: RefBook = new RefBook('My Title', 2019, 10);
refBook.printItem();
