import {useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import * as todoActions from '../src/store/common/actions';


function App() {
  const [itemText, setItemText] = useState("");

  const dispatch = useDispatch();
  const listItems = useSelector((state) => state.todoReducer.data);

  const [listItem, setListItem] = useState([]);
  const [isUpdating, setIsUpdating] = useState('');

  useEffect(() => {
    console.log("listItems huzaifa", listItems);
  }, [listItems]);

  useEffect(() => {
    dispatch(todoActions.getTodoRequest());
  }, [dispatch]);

  // useEffect(() => {
  //   dispatch(todoActions.postTodoRequest({

  //   }));
  // }, [dispatch]);


  const addItem = (e) => {
    e.preventDefault();
    if (!itemText){
      alert("Please enter a todo");
    }
    else{
      dispatch(todoActions.postTodoRequest({
        item: itemText,
      }));
      setItemText("");
    }

  };

  // useEffect(() => {
  //   const fetchItems = async () => {
  //     try {
  //       // const res = await axios.get("http://localhost:8000/api/item");
  //       const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
  //       setListItems(res.data);
  //       console.log(res.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchItems();
  // }, [listItems]);

  const deleteItem = async (id) => {
    // try {
    //   const res = await axios.delete(`http://localhost:8000/api/item/${id}`);
    //   const newListItem = listItems.filter((item) => item.id !== id);
    //   setListItem(newListItem);
    // } catch (error) {
    //   console.log(error);
    // }
  };

  const renderUpdateForm = () => (
    <form className="update-form">
      <input className="update-new-input" type="text" placeholder="New Item" />
      <button className="update-new-button" type="submit">Update</button>
    </form>
  );

  return (

    <div className="App">
    <h1>Todo List</h1>
    <form className="form" onSubmit={(e) => addItem(e)}>
      <input
        type="text"
        placeholder="Enter Todo"
        onChange={(e) => {
          setItemText(e.target.value);
        }}
        value={itemText}
      />
      <button type="submit">Add</button>
    </form>
    <div className="todo-listItem">
      {listItems.map((item) => (
        <div className="todo-item">
          {
          isUpdating === item.id 
          ? renderUpdateForm()
           : 
            <>
              <p className="item-content">{item.item}</p>
              <button className="update-item" onClick={() => {setIsUpdating(item._id)}}>Update</button>
              <button className="delete-item" onClick={() => {deleteItem(item._id)}}>Delete</button>
            </>
        }
        </div>
      ))}
    </div>
  </div>
    // <div className="App">
    //   <h1>Todo List</h1>
    //   <form className="form" onSubmit={(e) => addItem(e)}>
    //     <input

    //       type="text"
    //       placeholder="Enter Todo"
    //       onChange={(e) => {
    //         setItemText(e.target.value);
    //       }}
    //       value={itemText}
    //     />
    //     <button type="submit">Add</button>
    //   </form>

    //   <div className="list">

    //     {listItems.map((item) => (
    //       <div className="list-item" key={item.id}>

    //         <p>{item.item}</p>
    //     </div>
    //     ))}
    //     </div>
    // </div>
  );
}  

export default App;
