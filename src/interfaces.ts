import { Category } from './enums';

interface DamageLogger {
  (reason: string): void
}

interface Book {
  id: number;
  title: string;
  author: string;
  available: boolean;
  category: Category;
  pages?: number;
  markDamaged?: DamageLogger;
}

interface Person {
  name: string,
  email: string,
}

interface Author extends Person {
  numBooksPublished: number;
}

interface Librarian extends Person {
  departmant: string;
  assistCustomer: (custName: string) => void;
}

export {
  DamageLogger as Logger,
  Book,
  Author,
  Librarian
};