import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Room from "./Room"
import {Provider} from "react-redux";
import store from "./redux"

ReactDOM.render(<Provider store={store}><Room /></Provider>, document.getElementById("root"));
