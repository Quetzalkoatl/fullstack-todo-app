import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { TodosService } from './todos.service';
import { TodosController } from './todos.controller';
import { TodosSchema } from './todos.interface';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Todos', schema: TodosSchema }]),
  ],
  controllers: [TodosController],
  providers: [TodosService],
})
export class TodosModule {}
