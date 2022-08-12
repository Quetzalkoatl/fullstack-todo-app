import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { TodosModule } from './todos/todos.module';
@Module({
  imports: [TodosModule, MongooseModule.forRoot('mongodb://localhost:27017')],
})
export class AppModule {}
