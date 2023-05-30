import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
	const addUserHandler = (event) => {
		event.preventDefault();
		if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
			setError({
				title: "Invalid Input",
				message: "Please enter a valid name or age (non-empty values).",
			});
			return;
		}
		if (+enteredAge <= 0) {
			setError({
				title: "Invalid Input",
				message: "Please enter a valid age ( >0 ).",
			});
			return;
		}
		props.onAddUser(enteredUsername, enteredAge);
		setEnteredAge("");
		setEnteredUsername("");
	};

	const [enteredUsername, setEnteredUsername] = useState("");
	const [enteredAge, setEnteredAge] = useState("");
	const [error, setError] = useState();

	const usernameHandler = (event) => {
		setEnteredUsername(event.target.value);
	};

	const ageHandler = (event) => {
		setEnteredAge(event.target.value);
	};

	const handleError = () => {
		setError(null);
	};

	return (
		<div>
			{error && (
				<ErrorModal
					title={error.title}
					message={error.message}
					onConfirm={handleError}
				/>
			)}
			<Card className={styles.input}>
				<form onSubmit={addUserHandler}>
					<label htmlFor="username">Username</label>
					<input
						type="text"
						id="username"
						onChange={usernameHandler}
						value={enteredUsername}
						autoFocus
					/>
					<label htmlFor="age">Age(in Years)</label>
					<input
						type="number"
						id="age"
						onChange={ageHandler}
						value={enteredAge}
					/>
					<Button type="submit">Add User</Button>
				</form>
			</Card>
		</div>
	);
};

export default AddUser;
