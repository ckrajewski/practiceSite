import React from "react";
import ReactDOM from "react-dom";
import HelloWorld from "./components/HelloWorld/HelloWorld";
import { Provider } from "react-redux";
import store from "./store/store";

const app = document.getElementById('app');
ReactDOM.render(<Provider store={store}><HelloWorld/></Provider>, app);