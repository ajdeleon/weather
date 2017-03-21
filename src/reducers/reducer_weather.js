import { FETCH_WEATHER } from "../actions/index"

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      //return state.concat([action.payload.data])
      return [ action.payload.data, ...state] // same as above with ES6
  } // concat does not mutate state, but creates a new version with appended action.payload.data
  return state
}
