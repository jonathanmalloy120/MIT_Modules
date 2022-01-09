function TodoForm ({addTodo}) {
    const [value, setValue] = React.useState('')

    const handleSubmit = e => {
        e.preventDefault(); //stops event default behavior, which is pre-set to reload the page which we do not want
        if (!value) return; //if empty,do nothing
        addTodo(value)

        setValue(''); //clear user input from the form after createing new todo with it
      }

    return(
        <form onSubmit = {handleSubmit}/*handleSubmit defined above and runs when user hits submit on form*/> 
        <input 
          type = "text" 
          className ="input"
          value = {value}
          placeholder="Add Todo..."
          onChange={e => setValue(e.target.value)} // this changes the internal value of this input tag when user types
          />
      </form>
    );
}