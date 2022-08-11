import {createSlice} from '@reduxjs/toolkit';
import nextId from 'react-id-generator';

const todoSlice = createSlice({
	name: '@@todos',
	initialState: {
		todos: [
			{id: 1, title: 'Todo 1'},
			{id: 2, title: 'Todo 2'},
		],
		status: null,
		error: null,
	},
	reducers: {
		addTodo(state, action) {
			const todo = {
				id: nextId(),
				title: action.payload,
			};
			state.todos.push(todo);
		},
		removeTodo(state, action) {
			state.todos = state.todos.filter(todo => todo.id !== action.payload);
		},
	},
});

export const {addTodo, removeTodo} = todoSlice.actions;

export const todoReducer = todoSlice.reducer;
