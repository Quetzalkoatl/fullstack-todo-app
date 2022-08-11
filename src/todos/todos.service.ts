import { Injectable } from '@nestjs/common';
import { Todos } from './todos.entity';
import { ITodos } from './todos.interface';

@Injectable()
export class TodosService {
  private todos: ITodos[] = [];

  getTodos(): ITodos[] {
    return this.todos;
  }

  addTodo({ id, title }: ITodos): ITodos {
    const NewTodo = new Todos(id, title);

    this.todos.push(NewTodo);

    return NewTodo;
  }

  deleteTodo(id: string): ITodos[] {
    return (this.todos = this.todos.filter((todo) => todo.id !== id));
  }
}
