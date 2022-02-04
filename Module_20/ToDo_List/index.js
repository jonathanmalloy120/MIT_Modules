function App(){
  const [todos, setTodos] = React.useState([
    {
      text: 'learn react',
      isCompleted: false,
    },
    {
      text: 'meet friend for lunch',
      isCompleted: false,
    },
    {
      text: 'build todo app',
      isCompleted: false,
    }        
  ])

const addTodo = text => {
  const newTodos = [...todos,{text:text,isCompleted:false}]; //tack a new todo onto the end of the list we already have
  setTodos(newTodos); //set state with new list of todos
}


  const removeTodo = index => {
    let temp = [...todos]; //get all the todos
    temp.splice(index,1); //remove the one at index position
    setTodos(temp);//set todos with new shorter array
  }

  return(
    <>
    <div className = "app">
      <div className = "todo-list">
        {todos.map((todo, i) => 
          <Todo index = {i} key = {i} todo = {todo} remove={removeTodo}/>)}
        <TodoForm addTodo = {addTodo}/>
      </div>

    </div>
    </>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
