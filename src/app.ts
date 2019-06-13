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

function getAllBooks(): any[] {
  let books: Array<object> = [  
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

function logFirstAvailable(books: any[]): void {
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

function getBookTitlesByCategory(category: Category): string[] {
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

function getBookByID(id: number): object {
  const books = getAllBooks();
  return books.find(book => book.id === id);
}

function createCustomerID(name: string, id: number): string {
  return `${name}${id}`
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
let myID: string = createCustomerID('Ann', 10);
console.log(myID);
let idGenerator: (name: string, id: number) => string;
idGenerator = (name: string, id: number) => `${name}${id}`;
idGenerator = createCustomerID;
myID = idGenerator('Ann', 100);
console.log(myID);
