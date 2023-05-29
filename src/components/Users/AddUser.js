import Button from "../UI/Button";

const AddUser = (props) => {
	const addUserHandler = (event) => {
		event.preventDefault();
	};

	return (
		<form onSubmit={addUserHandler}>
			<label htmlFor="username">Username</label>
			<input type="text" id="username" />
			<label htmlFor="age">Age(in Years)</label>
			<input type="number" id="age" />
			<Button />
		</form>
	);
};

export default AddUser;
