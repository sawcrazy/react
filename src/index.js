import React from "react";
import reactDom from "react-dom";
import "bootstrap/dist/css/bootstrap.css"
import Counter from "./components/counter";
import Todo from "./components/todo";
import TodoList from "./components/todo";
import TodoApp from "./components/todo";
import Test from "./test"
import Zadanee1 from "./components/zadanee1";
import Zadanie2 from "./components/zadanie2";
import "./components/style.css"
import Zadan3 from "./components/zadan3";
import Z4 from "./components/z4";
import Z5 from "./components/z5";



const App = () => {
    return (
        <div>
            <Z5/>
        </div>

        )
}
reactDom.render(<App/>, document.getElementById("root"));