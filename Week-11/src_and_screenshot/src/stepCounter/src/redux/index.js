import redux, {createStore} from "redux"

export function increment() {
    return {
        type: "INCREMENT"
    }
}

export function decrement() {
    return {
        type: "DECREMENT"
    }
}
export function reset() {
    return {
        type: "RESET"
    }
}

function reducer(step = 0, action) {
    switch(action.type) {
        case "INCREMENT":
            return step + 1
        case "DECREMENT":
            return step - 1
        case "RESET":
            return 0;
        default:
            return step
    }
}

const store = createStore(reducer)
store.subscribe(() => console.log(store.getState()))
export default store
