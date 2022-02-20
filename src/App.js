import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Container,Stack,Hero,TodoForm,ListItem,Modal,Divider} from "./components";
import {fetchTodos, deleteTodo, updateTodo} from "./store/todoSlice";

function App() {
    const dispatch =  useDispatch();
    const todos = useSelector(state => state.todos);

    React.useEffect(() => {
        dispatch(fetchTodos())
    },[])

  return (
      <Container>
          <Hero/>
          <Stack>
              <TodoForm />
              <Divider/>
              {todos.data.length > 0 ? todos.data.map((item,index) =>
                  <ListItem
                      isCompleted={item.completed}
                      onChange={() => dispatch(updateTodo(item))}
                      onDelete={() => dispatch(deleteTodo(item))}
                      data={item}
                      key={index}>
                      {item.todo}
                  </ListItem>) : <p className="text-gray-500">There is no todo. Lets create one !</p>}
          </Stack>
      </Container>
  );
}

export default App;
