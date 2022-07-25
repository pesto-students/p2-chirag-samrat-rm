import {createStore} from "redux"
export function flipLight(){
  return {type:"FLIP_LIGHT"};
}

function reducer(light=true,action){
  switch(action.type){
    case "FLIP_LIGHT":
      return light?false : true; 
    default :
      return light;
  }
}
let store = createStore(reducer);

export default store;
