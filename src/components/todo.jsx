import React from "react";

class Todo extends React.Component {

    state ={arr: [],
            input: '',
            }
    inputValue =(event) =>{
        let input = event.target.value;
        this.setState({
            input: input
        })
    }
    renderTodo =() =>{
            let todo = [...this.state.arr,this.state.input];
        this.setState({arr:todo})
            console.log(todo)
    }
    render() {

        return(
            <div>
                <h1>Ну наконец ТУДУ</h1>
                <input type="text" value={this.state.input} onChange={this.inputValue}/>
                <button onClick={this.renderTodo}>Добавить</button>
                <div>
                    <ul>
                        <li>

                        </li>
                    </ul>
                </div>
            </div>
        )

    }
}

export default Todo;