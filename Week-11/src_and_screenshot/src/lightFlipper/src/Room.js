import React from "react"
import {connect} from "react-redux"
import {flipLight} from "./redux"

  function Room (props) {
    console.log(props.flipLight)
  const lightedness = props.light ? "lit" : "dark";
  return (
    <div className={`room ${lightedness}`}>
        The room is {lightedness} !
        <br />
        <button onClick={props.flipLight}>flip</button>
      </div>
  )
}

function mapStateToProps(globalState) {
  return {
      light : globalState
  }
}

export default connect(mapStateToProps, {flipLight})(Room)