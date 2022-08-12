import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { ITodo } from './todos.interface';

@Injectable()
export class TodosService {
  private todos: ITodo[] = [];

  constructor(
    @InjectModel('Todos') private readonly todosModel: Model<ITodo>,
  ) {}

  async getTodos(): Promise<ITodo[]> {
    const todos = await this.todosModel.find().exec();

    return todos.map((todo) => ({
      id: todo.id,
      title: todo.title,
    }));
  }

  async addTodo({ title }: ITodo) {
    const NewTodo = new this.todosModel({ title });
    const result = await NewTodo.save();

    return result;
  }

  async deleteTodo(id: string) {
    const result = await this.todosModel.deleteOne({ _id: id }).exec();

    return result;
  }
}
