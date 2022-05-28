import React, { useState } from "react"
import Card from "../UI/Card"
import classes from "./AddUser.module.css"
import Button from "../UI/Button"

const AddUser = (props) => {
	const [enteredUsername, setEnteredUsername] = useState("")
	const [enteredAge, setEnteredAge] = useState("")

	const addUserHandler = (event) => {
		event.preventDefault()
		if (
			enteredUsername.trim().length === 0 ||
			enteredAge.trim().length === 0
		) {
			return
		}
		// the "+enteredAge" forces a conversion from string input to a number.
		if (+enteredAge < 1) {
			return
		}
		props.onAddUser(enteredUsername, enteredAge)
		setEnteredAge("")
		setEnteredUsername("")
	}

	const usernameChangeHandler = (event) => {
		setEnteredUsername(event.target.value)
	}
	const ageChangeHandler = (event) => {
		setEnteredAge(event.target.value)
	}

	return (
		<Card className={classes.input}>
			<form onSubmit={addUserHandler}>
				<label htmlFor="username">Username</label>
				<input
					value={enteredUsername}
					id="username"
					type="text"
					onChange={usernameChangeHandler}
				/>
				<label htmlFor="age">Age (Years)</label>
				<input
					value={enteredAge}
					id="age"
					type="number"
					onChange={ageChangeHandler}
				/>
				<Button type="submit">Add User</Button>
			</form>
		</Card>
	)
}

export default AddUser
