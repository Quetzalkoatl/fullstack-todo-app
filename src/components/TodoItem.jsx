import {useDispatch} from 'react-redux';

import {deleteTodo} from '../store/todo/TodoSlice';

const TodoItem = ({id, title}) => {
	const dispatch = useDispatch();

	return (
		<li style={{display: 'flex'}}>
			<h4>{title}</h4>
			<button
				style={{height: '30px', alignSelf: 'center', marginLeft: '15px'}}
				onClick={() => dispatch(deleteTodo(id))}
			>
				Delete
			</button>
		</li>
	);
};

export default TodoItem;
