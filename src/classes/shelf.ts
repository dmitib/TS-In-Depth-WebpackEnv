export default class Shelf<T> {
  private _items: Array<T> = [];

  add(item: T): void {
    this._items.push(item);
  }

  getFirst() {
    return this._items[0];
  }
}
