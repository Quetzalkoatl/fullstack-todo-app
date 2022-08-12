import { Controller, Body, Get, Post, Delete, Param } from '@nestjs/common';

import { ITodo } from './todos.interface';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
  constructor(private todosService: TodosService) {}

  @Get()
  getTodos(): Promise<ITodo[]> {
    return this.todosService.getTodos();
  }

  @Post('post')
  addTodo(@Body() todo: ITodo) {
    return this.todosService.addTodo(todo);
  }

  @Delete('delete/:id')
  deleteTodo(@Param('id') id: string) {
    return this.todosService.deleteTodo(id);
  }
}
