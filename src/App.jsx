import {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';

import {addTodo} from './store/todo/TodoSlice';

import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
	const [title, setTitle] = useState('');
	const dispatch = useDispatch();

	useEffect(() => {}, []);

	const addNewTodo = () => {
		dispatch(addTodo(title));
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
		</>
	);
}

export default App;
