import { Book, LibMgrCallback } from '../interfaces';
import { Category } from '../enums';

export function purge<T>(inventory: Array<T>): Array<T> {
  return inventory.splice(2, inventory.length);
}

export function getAllBooks(): Book[] {
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

export function logFirstAvailable(books = getAllBooks()): void {
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

export function getBookTitlesByCategory(category: Category = Category.Angular): string[] {
  const books = getAllBooks();
  const titles: string[] = [];

  for(const book of books) {
    if ((<any>book).category == category) {
      titles.push((<any>book).title);
    }
  }

  return titles;
}

export function logBookTitles(titles: Array<string>): void {
  titles.forEach(title => console.log(title))
}

export function getBookByID(id: number): Book | undefined {
  const books = getAllBooks();
  return books.find(book => book.id === id);
}

export function createCustomerID(name: string, id: number): string {
  return `${name}${id}`
}

export function createCustomer(name: string, age?: number, city?: string): void {
  console.log(`Customer name ${name}`);

  if (age) {
    console.log(`Customer age ${age}`);
  }

  if (city) {
    console.log(`Customer city ${city}`);
  }
}

export function checkoutBooks(customer: string, ...bookIDs: number[]): string[] {
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

export function getTitles(author: string): string[];
export function getTitles(available: boolean): string[];
export function getTitles(bookProperty: any): string[] {
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

export function printBook(book: Book): void {
  console.log(`${book.title} by ${book.author}`);
}

export function getBooksByCategory(category: Category, callback: LibMgrCallback) {
  setTimeout(() => {
    try {
      const titles: string[] = getBookTitlesByCategory(category);

      if (titles.length > 0) {
        callback(null, titles);
      } else {
        throw new Error('No Titles Found');
      }
    } catch(error) {
      callback(error, null);
    }
  }, 2000);
}

export function logCategorySearch(err: Error, titles: string[]): void {
  if (err) {
    console.log(err.message);
  } else {
    console.log(titles);
  }
}

export function getBooksByCategoryPromise(category: Category): Promise<string[]> {
  const p: Promise<string[]> = new Promise((resolve, reject) => {
    setTimeout(() => {
      const titles: string[] = getBookTitlesByCategory(category);

      if (titles.length > 0) {
        resolve(titles);
      } else {
        reject('No Titles Found');
      }
    }, 2000);
  });

  return p;
}

export async function logSearchResults(category: Category) {
  let foundBooks = await getBooksByCategoryPromise(category);
  console.log(foundBooks);
}
