import React from "react";

function Todo(props) {

    return <div
        className={props.todo.completed ? 'completed' : null}
        onClick={() => props.toggleCompleted(props.index)}
    >
        {props.todo.task}
    </div>;
}

export default Todo;