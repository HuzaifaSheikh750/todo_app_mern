import { TODO_TYPES } from "./types"

const initialState = {
  error: null,
  data: [],
}

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case TODO_TYPES.GET_TODO_SUCCESS:
      return {
        ...state,
        data: action.payload
      }

    case TODO_TYPES.GET_TODO_FAILURE:
      return {
        ...state,
        error: action.payload
      }

    case TODO_TYPES.POST_TODO_SUCCESS:
      return {
        ...state,
        data: action.payload
      }

    case TODO_TYPES.POST_TODO_FAILURE:
      return {
        ...state,
        error: action.payload
      }

    default:
      return state
  }
}
