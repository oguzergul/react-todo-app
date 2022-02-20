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
        } else {
            alert("Todo can not be empty!")
        }
    }

    return (
        <Form>
            <Input
                value={todo.todo}
                placeholder="Clean dishes"
                onChange={(event) => setTodo({todo: event.currentTarget.value})}
            />
                <Button
                    type={"submit"}
                    onClick={(event) => addNewTodo(event)}>
                    SAVE
                </Button>
        </Form>
    )
}