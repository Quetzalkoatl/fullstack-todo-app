import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import nextId from 'react-id-generator';

export const fetchTodos = createAsyncThunk(
	'todos/fetchTodos',
	async function (_, {rejectWithValue}) {
		try {
			const response = await fetch('http://localhost:4000/todos/');

			if (!response.ok) {
				throw new Error('Cant fetch todos');
			}

			const data = await response.json();

			return data;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

export const createTodo = createAsyncThunk(
	'todos/createTodo',
	async function (text, {rejectWithValue, dispatch}) {
		try {
			const todo = {
				id: nextId(),
				title: text,
			};

			const response = await fetch('http://localhost:4000/todos/post/', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(todo),
			});

			if (!response.ok) {
				throw new Error('Cant add todo');
			}

			const data = await response.json();

			dispatch(addTodo(data));
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

export const deleteTodo = createAsyncThunk(
	'todos/removeTodo',
	async function (id, {rejectWithValue, dispatch}) {
		try {
			const response = await fetch(`http://localhost:4000/todos/delete/${id}`, {
				method: 'DELETE',
			});

			if (!response.ok) {
				throw new Error('Cant delete todo');
			}

			dispatch(removeTodo(id));
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

const setError = (state, action) => {
	state.status = 'rejected';
	state.error = action.payload;
};

const todoSlice = createSlice({
	name: '@@todos',
	initialState: {
		todos: [],
		status: null,
		error: null,
	},
	reducers: {
		addTodo(state, action) {
			state.todos.push(action.payload);
		},
		removeTodo(state, action) {
			state.todos = state.todos.filter(todo => todo.id !== action.payload);
		},
	},
	extraReducers: {
		[fetchTodos.pending]: state => {
			state.status = 'loading';
			state.error = null;
		},
		[fetchTodos.fulfilled]: (state, action) => {
			state.status = 'fulfilled';
			state.todos = action.payload;
		},
		[fetchTodos.rejected]: setError,
		[createTodo.rejected]: setError,
		[deleteTodo.rejected]: setError,
	},
});

export const {addTodo, removeTodo} = todoSlice.actions;

export const todoReducer = todoSlice.reducer;
