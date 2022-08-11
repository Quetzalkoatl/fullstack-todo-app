const TodoInput = ({handleSubmit, title, handleInput}) => {
	return (
		<div>
			<label style={{display: 'flex', margin: '20px'}}>
				<input
					type='text'
					value={title}
					style={{width: '300px', height: '40px', fontSize: '16px'}}
					onChange={e => handleInput(e.target.value)}
				/>
				<button
					style={{marginLeft: '20px', width: '100px'}}
					onClick={() => handleSubmit(title)}
				>
					Add todo
				</button>
			</label>
		</div>
	);
};

export default TodoInput;
