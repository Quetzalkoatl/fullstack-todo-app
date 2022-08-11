import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {createTodo} from './store/todo/TodoSlice';
import {fetchTodos} from './store/todo/TodoSlice';

import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
	const [title, setTitle] = useState('');
	const dispatch = useDispatch();
	const todos = useSelector(state => state.todos);

	useEffect(() => {
		dispatch(fetchTodos());
	}, [dispatch]);

	const addNewTodo = () => {
		dispatch(createTodo(title));
		setTitle('');
	};

	return (
		<>
			<TodoInput
				handleSubmit={addNewTodo}
				title={title}
				handleInput={setTitle}
			/>
			<TodoList />

			{todos.status === 'loading' && (
				<h2 style={{marginLeft: '20px'}}>Loading...</h2>
			)}

			{todos.error && (
				<h2 style={{marginLeft: '20px'}}>Error: {todos.error}</h2>
			)}
		</>
	);
}

export default App;
