/**
 * @class Model
 *
 * Manages the data of the application.
 */
class Todo {
  id:number;
  text:string;
  complete:boolean;
  constructor({ text, complete }:any = { complete: false }) {
    this.id = this.uuidv4();
    this.text = text;
    this.complete = complete;
  }

  public uuidv4():number {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c: number) =>
      (
        c ^
        (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
      ).toString(16)
    );
  }
}
