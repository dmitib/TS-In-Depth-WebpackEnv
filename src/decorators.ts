export function sealed(param: string) {
  return function(target: Function): void {
    console.log(`Sealing the constructor ${param}`);
    Object.seal(target);
    Object.seal(target.prototype);
  }
}

export function logger<TFunction extends Function>(target: TFunction): TFunction {
  const newConstructor: Function = function() {
    console.log(`Creating new instance`);
    console.log(target.name);

    this.age = 30;
  };

  newConstructor.prototype = Object.create(target.prototype);
  newConstructor.prototype.constructor = target;

  newConstructor.prototype.printLibrarian = function() {
    console.log(`Librarian name: ${this.name}, Librarian age: ${this.age}`);
  }

  return newConstructor as TFunction;
}
