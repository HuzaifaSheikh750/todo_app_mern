import { createActionTypes } from "../../utility"

export const TODO_TYPES = createActionTypes("TODO_TYPES", [
  "GET_TODO_REQUEST",
  "GET_TODO_SUCCESS",
  "GET_TODO_FAILURE",

  "POST_TODO_REQUEST",
  "POST_TODO_SUCCESS",
  "POST_TODO_FAILURE"
])
