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
    addTodo =() =>{
        let todo = [...this.state.arr,this.state.input];
        this.setState({arr:todo})

    }
    deleteTodo =() =>{
        let arr = [...this.state.arr];

    }
    renderTodo =() =>{
        if (this.state.arr.length === 0){
            return (
                <div>
                    Нет дел
                </div>
            )
        }
      return   this.state.arr.map((item) =>{
            return (
                <li>
                    {item}
                    <button>удалить дельце</button>
                </li>
            )
        })

    }
    render() {

        return(
            <div>
                <h1>Ну наконец ТУДУ</h1>
                <input type="text" value={this.state.input} onChange={this.inputValue}/>
                <button onClick={this.addTodo}>Добавить</button>
                <div>
                    <ul>
                        {this.renderTodo()}
                    </ul>
                </div>
            </div>
        )

    }
}

export default Todo;