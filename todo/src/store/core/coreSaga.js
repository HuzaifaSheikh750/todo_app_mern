import { all, fork } from "redux-saga/effects"

import seekerTodoSaga from "../common/saga"

export default function* coreSaga() {
  yield all([
    fork(seekerTodoSaga)

  ])
}
