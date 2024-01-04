import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';

// fetchでデータを取得する


const getTasks = async () => {
	const response = await fetch('http://localhost:3000/task').then(res =>
		res.json());
		console.log(response);
	return response;
}


function index() {
	
	const [tasks, setTasks] = useState([]);
	
	useEffect(() => {
		getTasks().then(tasks => {
			setTasks(tasks);
		})
	}, []);


  return (
	<div>
		<h1>Tasks</h1>
		<ul className={'task-list'}>
			{tasks.map((task) => (
				<li key={task.id}>{task.title}:{task.status}
				</li>
			))}
		</ul>
	</div>
  )
}

export default index