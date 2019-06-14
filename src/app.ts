showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
  const elt = document.getElementById(divName);
  elt.innerText = `Hello from ${name}`;
}

// =======================================================

enum Category { 
  Javascript,
  CSS,
  HTML,
  TypeScript,
  Angular
}

interface Book {
  id: number;
  title: string;
  author: string;
  available: boolean;
  category: Category;
  pages?: number;
  markDamaged?: (reason: string) => void;
}

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
const myBook: Book = {
  id: 5,
  title: 'Colors, Backgrounds, and Gradients',
  author: 'Eric A. Meyer',
  available: true,
  category: Category.CSS,
  pages: 200,
  markDamaged: (reason: string) => console.log(`Damaged: ${reason}`)
};
printBook(myBook);
myBook.markDamaged(`missing back cover`);
