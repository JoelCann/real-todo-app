import { useNavigate } from "react-router-dom";




const AddTodo = () => {
        const navigate = useNavigate();


    const saveTodo = (event) => {
        event.preventDefault();

        //post data to todo API
        //Go to the homepage
        navigate('/')

    }


  return (
    <div>
      <h1>Add a new Todo</h1>
      <form onSubmit={saveTodo}>
        <input type="text" placeholder="Enter your Task" required/>
        <button type="submit">Submit</button>
      </form>

    </div>
  );
};

export default AddTodo;
