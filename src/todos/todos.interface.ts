import * as mongoose from 'mongoose';

export const TodosSchema = new mongoose.Schema({
  title: { type: String, required: true },
});

export interface ITodo {
  id: string;
  title: string;
}
