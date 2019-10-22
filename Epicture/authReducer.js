import { combineReducers } from 'redux'

const INITIAL_STATE = {
  isAuthed: false,
  bearer: ''
}

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_TOKEN':
      const { bearer } = state

      bearer = action.payload

      const newState = {
        isAuthed: true,
        bearer: bearer
      }

      return newState;
    default:
      return state
  }
}

export default combineReducers({
  Auth: authReducer
})