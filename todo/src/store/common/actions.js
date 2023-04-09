import { TODO_TYPES } from "./types"

export const getTodoRequest = (data) => ({
  type: TODO_TYPES.GET_TODO_REQUEST,
  payload: data
})

export const getTodoSuccess = (data) => ({
  type: TODO_TYPES.GET_TODO_SUCCESS,
  payload: data
})

export const getTodoFailure = (data) => ({
  type: TODO_TYPES.GET_TODO_FAILURE,
  payload: data
})



export const postTodoRequest = (data) => ({
  type: TODO_TYPES.POST_TODO_REQUEST,
  payload: data
})
export const postTodoSuccess = (data) => ({
  type: TODO_TYPES.POST_TODO_SUCCESS,
  payload: data
})
export const postTodoFailure = (data) => ({
  type: TODO_TYPES.POST_TODO_FAILURE,
  payload: data
})
