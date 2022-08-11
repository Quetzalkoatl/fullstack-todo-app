import {useDispatch} from 'react-redux';

import {removeTodo} from '../store/todo/TodoSlice';

const TodoItem = ({id, title}) => {
	const dispatch = useDispatch();

	return (
		<li style={{display: 'flex'}}>
			<h4>{title}</h4>
			<button
				style={{height: '30px', alignSelf: 'center', marginLeft: '15px'}}
				onClick={() => dispatch(removeTodo(id))}
			>
				Delete
			</button>
		</li>
	);
};

export default TodoItem;
