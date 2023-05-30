import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
	const addUserHandler = (event) => {
		event.preventDefault();
		if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
			return;
		}
		if (+enteredAge < 0) {
			return;
		}
		console.log(enteredUsername, enteredAge);
		setEnteredAge("");
		setEnteredUsername("");
	};

	const [enteredUsername, setEnteredUsername] = useState("");
	const [enteredAge, setEnteredAge] = useState("");

	const usernameHandler = (event) => {
		setEnteredUsername(event.target.value);
	};

	const ageHandler = (event) => {
		setEnteredAge(event.target.value);
	};

	return (
		<Card className={styles.input}>
			<form onSubmit={addUserHandler}>
				<label htmlFor="username">Username</label>
				<input
					type="text"
					id="username"
					onChange={usernameHandler}
					value={enteredUsername}
				/>
				<label htmlFor="age">Age(in Years)</label>
				<input
					type="number"
					id="age"
					onChange={ageHandler}
					value={enteredAge}
				/>
				<Button />
			</form>
		</Card>
	);
};

export default AddUser;
