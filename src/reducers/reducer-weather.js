import { FETCH_WEATHER } from "../actions/index";

export default function(state = [], action){
    // console.log('Action received', action);

    switch(action.type){
        case FETCH_WEATHER:
//return NEW instance (object) of state. Takes an existing array flattens it out and creates a new one.
//OR return state.concat( [ action.payload.data ] );
        return [ action.payload.data, ...state ];
    }
    return state;
}