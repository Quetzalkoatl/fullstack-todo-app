import { ITodos } from './todos.interface';

export class Todos implements ITodos {
  id: string;
  title: string;

  constructor(id: string, title: string) {
    this.id = id;
    this.title = title;
  }
}
