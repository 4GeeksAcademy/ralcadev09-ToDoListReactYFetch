import React, { useState, useEffect } from "react";
import ToDo from "./ToDo";

//create your first component
const Home = () => {
	const [toDoList, setToDoList] = useState([])
	const [inputValue, setInputValue] = useState("")
	const handleKeyDown = (e) => {
		if (e.key === "Enter" && inputValue.trim() !== "") {
			fetch("https://playground.4geeks.com/todo/todos/ralca09", {
				method: "POST",
				body: JSON.stringify({
					label: inputValue,
					is_done: false
				}),
				headers: {
					"Content-Type": "application/json"
				}
			})
				.then((response) => {
					if (!response.ok) {
						throw new Error("error getting to-dos")
					}
					return response.json()
				})
				.then((data) => {
					setToDoList([...toDoList, data]);
					setInputValue("");
				})
				.catch((error) => { console.log(error) })

		}
	};

	const handleDelete = (id) => {
		fetch(`https://playground.4geeks.com/todo/todos/${id}`, {
			method: "DELETE"
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error("error getting to-dos")
				}
				setToDoList(toDoList.filter((value) => value.id !== id));
				return
			})
			.catch((error) => { console.log(error) })
	}
	useEffect(() => {
		fetch("https://playground.4geeks.com/todo/users/ralca09")
			.then((response) => { return response.json() })
			.then((data) => {
				setToDoList(data.todos);
			})
			.catch((error) => {
				console.log(error);
			})
	}, [])
	return (
		<div className="d-flex flex-column align-items-center">
			<h1 className="text-center">
				To Do List
			</h1>

			<div className="d-flex flex-column" style={{ width: "600px" }}>
				<input
					type="text"
					className="form-control"
					placeholder="No hay tareas, añadir tareas"
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
					onKeyDown={handleKeyDown}
				/>
				{
					toDoList.map((value, index) => (
						<ToDo toDo={value} key={index} onDelete={() => handleDelete(value.id)} />
					))
				}
				<p className="form-text p-2 m-0 border">
					{toDoList.length} items{toDoList.length !== 1 ? "s" : ""} left
				</p>
			</div>

		</div>
	);
};

export default Home;