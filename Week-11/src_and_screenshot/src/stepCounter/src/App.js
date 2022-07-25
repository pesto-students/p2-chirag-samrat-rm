
import React from "react"
import {connect} from "react-redux"
import {increment, decrement, reset} from "./redux"
import "./styles.css";

function App(props) {    
    return (
        <div className="App">
            {props.step > 0 ?<h1>You have walked <span className="steps" >{props.step}</span> steps today</h1>:<h1>Add a step</h1> }
            <div className="inc-dec">
            <button  onClick={props.decrement}>-</button>
            <button  onClick={props.increment}>+</button>
            </div>
            <div >
            <button className="reset" onClick={props.reset}>Reset</button>
            </div>
        </div>
    )
}


export default connect(state => ({step: state}), /* mapDispatchToProps are directly added */ {increment, decrement, reset})(App)