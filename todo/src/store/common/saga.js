import { put, takeEvery, all, call } from "redux-saga/effects"

import { TODO_TYPES } from "./types"

import * as todoActions from "./actions"

import { getAllTodos , postAllTodos} from "../../services/api"

function* getTodoRequest(action) {
  try {
    const response = yield call(getAllTodos, action.payload)
    console.log("todo data jaldi", response)
    yield put(todoActions.getTodoSuccess(response))
  } catch (err) {
    yield put(todoActions.getTodoFailure(err))
  }
}

function* postTodoRequest(action) {
    try {
      const response = yield call(postAllTodos, action.payload)
      console.log("todo data", response)
      yield put(todoActions.postTodoSuccess(response))
    } catch (err) {
      yield put(todoActions.postTodoFailure(err))
    }
  }


function* seekerTodoSaga() {
  yield all([
    takeEvery(TODO_TYPES.GET_TODO_REQUEST, getTodoRequest),
    takeEvery(TODO_TYPES.POST_TODO_REQUEST, postTodoRequest),
  ])
}

export default seekerTodoSaga
