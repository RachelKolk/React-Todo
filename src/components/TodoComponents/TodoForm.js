import React from "react";

function TaskForm(props) {
    return (
        <form onSubmit={props.addNewTask}>
            <input
                value={props.task}
                type="text"
                name="task"
                placeholder="Enter new Todo Task"
                onChange={props.handleChanges}
            />
            <button type="submit">Add task</button>
        </form>
    )
}

export default TaskForm;