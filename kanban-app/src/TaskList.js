
import React from 'react';
import PropTypes from 'prop-types';

import styles from './TaskList.css';

export default class TaskList extends React.Component{
    render(){
        // let taskComponents = [];

        // this.props.tasks.forEach(task => taskComponents.push(<li className={styles.Task}>
        //     <input type='checkbox' defaultChecked={task.done} />
        //         {task.name}
        //     <a href='#' className={styles['Task-remove']} />
        // </li>));
        return(
        <div >
            <ul>
                {this.props.tasks.map(task => <li 
                    key= {task.id}
                    className={styles.Task}>
                <input type='checkbox' defaultChecked={task.done} />
                    {task.name}
                <a href='#' className={styles['Task-remove']} />
                </li> ) }
            </ul>
            <input type='text' className={styles['Input--add-task']} placeholder='새 태스크'/>
        </div>           
        )
    }
}

TaskList.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.object)
}