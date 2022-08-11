import { Controller, Body, Get, Post, Delete, Param } from '@nestjs/common';

import { ITodos } from './todos.interface';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
  constructor(private todosService: TodosService) {}

  @Get()
  getTodos(): ITodos[] {
    return this.todosService.getTodos();
  }

  @Post('post')
  addTodo(@Body() todo: ITodos): ITodos {
    return this.todosService.addTodo(todo);
  }

  @Delete('delete/:id')
  deleteTodo(@Param('id') id: string): ITodos[] {
    return this.todosService.deleteTodo(id);
  }
}
