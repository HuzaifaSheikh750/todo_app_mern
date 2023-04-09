import { Endpoints } from "../config/endpoints"
import axios from "axios"

export async function getAllTodos() {
    return await axios
      .get(Endpoints.getTodos)
      .then((res) => res.data)
      .catch((err) => err)
  } 
  
export async function postAllTodos(data) {
    return await axios
      .post(Endpoints.postTodo, data)
      .then((res) => res.data)
      .catch((err) => err)
  } 