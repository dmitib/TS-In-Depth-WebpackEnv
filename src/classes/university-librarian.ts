import * as Interfaces from '../interfaces';
import { sealed, logger, writable, logParameter, logMethod, format } from './../decorators';

@logger
@sealed('UniversityLibrarian')
export class UniversityLibrarian implements Interfaces.Librarian {
  @format() name: string;
  email: string;
  departmant: string;

  @logMethod
  assistCustomer(@logParameter custName: string): void {
    console.log(`${this.name} is assisting ${custName}`);
  }

  @writable(true)
  assistFaculty() {
    console.log(`Assisting Faculty`);
  }

  @writable(false)
  teachCommunity() {
    console.log(`Teaching Community`);
  }
}
