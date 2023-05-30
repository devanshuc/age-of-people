import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
	const addUserHandler = (event) => {
		event.preventDefault();
		console.log(enteredUsername, eneteredAge);
	};

	const [enteredUsername, setEnteredUsername] = useState("");
	const [eneteredAge, setEnteredAge] = useState("");

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
				<input type="text" id="username" onChange={usernameHandler} />
				<label htmlFor="age">Age(in Years)</label>
				<input type="number" id="age" onChange={ageHandler} />
				<Button />
			</form>
		</Card>
	);
};

export default AddUser;
