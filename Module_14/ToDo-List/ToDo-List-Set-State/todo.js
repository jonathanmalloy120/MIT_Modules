function Todo({todo,index,remove}) {
    function handle() {
        remove(index);
    }

    return (
        <div className = "todo" onClick={handle} /*removes this todo on click*/>
        {todo.text} (-) </div>
    )
    
}