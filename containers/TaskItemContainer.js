import { connect } from 'react-redux';
import { toggleTask } from '../store/actions';
import TaskItemComponent from '../components/TaskItemComponent';

const TaskItemContainer = connect()(TaskItemComponent);

export default TaskItemContainer;
