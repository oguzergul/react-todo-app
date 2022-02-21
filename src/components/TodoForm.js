import {Input,Form,Button} from "../components";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {createTodo} from "../store/todoSlice";

export const TodoForm =() => {
    const dispatch = useDispatch();

    const [todo,setTodo] = useState({
        todo: "",
        completed: false,
    });

    const addNewTodo = (event) => {
        event.preventDefault();
        if(todo.todo !== ""){
            dispatch(createTodo(todo));
            setTodo({todo:""})
        } else {
            alert("Todo can not be empty!")
        }
    }

    return (
        <Form id="todo-form">
            <Input
                id="todo-form-input"
                value={todo.todo}
                placeholder="Clean dishes"
                onChange={(event) => setTodo({todo: event.currentTarget.value})}
            />
                <Button
                    id="todo-form-button"
                    type={"submit"}
                    onClick={(event) => addNewTodo(event)}>
                    SAVE
                </Button>
        </Form>
    )
}
