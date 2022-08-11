import { Injectable } from '@nestjs/common';
import { ITodo } from './todos.interface';

@Injectable()
export class TodosService {
  private todos: ITodo[] = [
    {
      id: '1',
      title: 'Test Todo',
    },
  ];

  getTodos(): ITodo[] {
    return this.todos;
  }

  addTodo({ id, title }: ITodo): ITodo {
    const NewTodo: ITodo = { id, title };
    this.todos.push(NewTodo);

    return NewTodo;
  }

  deleteTodo(id: string): ITodo[] {
    return (this.todos = this.todos.filter((todo) => todo.id !== id));
  }
}
