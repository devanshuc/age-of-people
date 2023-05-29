import styles from "./Buttton.module.css";

const Button = () => {
	return (
		<button type="submit" className={styles.button}>
			Add User
		</button>
	);
};

export default Button;
