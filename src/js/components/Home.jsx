import React, { useState } from "react";
import ToDo from "./ToDo";

//create your first component
const Home = () => {
	const [toDoList, setToDoList] = useState([])
	const [inputValue, setInputValue] = useState("")
	const handleKeyDown = (e) => {
		if (e.key === "Enter" && inputValue.trim() !== "") {
			setToDoList([...toDoList, inputValue.trim()]);
			setInputValue("");
		}
	};

	const handleDelete = (indexToDelete) => {
		setToDoList(toDoList.filter((_, index) => index !== indexToDelete));
	}
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
						<ToDo toDo={value} key={index} onDelete={()=> handleDelete(index)} />
					))
				}
				<p className="form-text p-2 m-0 border">	
					{toDoList.length} items{toDoList.length !==1 ? "s" : ""} left
				</p>
			</div>

		</div>
	);
};

export default Home;