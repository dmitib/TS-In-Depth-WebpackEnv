import * as Interfaces from '../interfaces';
import { sealed, logger, writable, logParameter, logMethod, format, formatEmail } from './../decorators';

@logger
@sealed('UniversityLibrarian')
export class UniversityLibrarian implements Interfaces.Librarian {
  @format() name: string;
  @formatEmail() email: string;
  departmant: string;

  @logMethod
  assistCustomer(@logParameter custName: string): void {
    console.log(`${this.name} is assisting ${custName}`);
  }

  assistCustomerEmail(custEmail: string): void {
    console.log(`${this.email}, ${custEmail}`);
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
