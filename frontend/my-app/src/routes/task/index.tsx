import { h } from 'preact';
import Tasks from '../../components/tasks';


function index() {
	



  return (
	<div>
		<h1>Tasks</h1>
		<Tasks />
		{/* <ul className={'task-list'}>
			{tasks.map((task) => (
				<li key={task.id}>{task.title}:{task.status}
				</li>
			))}
		</ul> */}
	</div>
  )
}

export default index