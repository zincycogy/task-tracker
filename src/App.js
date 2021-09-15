import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
	const [tasks, setTasks] = useState([
		{
			id: 1,
			text: "Doctors Appointment",
			day: "Feb 5th at 2:30px",
			reminder: true,
		},
		{
			id: 2,
			text: "Meeting at scjpppl",
			day: "Feb 6th at 1:30px",
			reminder: true,
		},
		{
			id: 3,
			text: "Shopping",
			day: "Feb 10th at 4:30px",
			reminder: false,
		},
		{
			id: 4,
			text: "Dentist",
			day: "Feb 14th at 3:30px",
			reminder: true,
		},
	]);

	const deleteTask = (id) => {
		setTasks(tasks.filter((task) => task.id !== id));
	};

	const toggleReminder = (id) => {
		//console.log(id);
		setTasks(
			tasks.map((task) =>
				task.id === id ? { ...task, reminder: !task.reminder } : task
			)
		);
	};

	return (
		<div className="container">
			Task tracker title
			<Header />
			{tasks.length > 0 ? (
				<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
			) : (
				"No tasks to show"
			)}
		</div>
	);
}

export default App;
