import React from "react";

class TodoPro extends React.Component {
    state = {
        arr:[{
            id:0,
            task:'задача',
        }],
    }
    inputValue = (event) =>{
        let input = event.target.value;
        this.setState({arr: [{
            task:input,
            }]})
    }
    addValue = () =>{
        let arrItem = {
            id:this.state.arr.length ? this.state.arr[this.state.arr.length - 1] + 1 : 1,
            task: this.state.arr[0].task,
        };
        let newArr = [...this.state.arr,arrItem]
        this.setState({arr: newArr})
        console.log(newArr)
    }



    render() {
        return(
            <div>
                Привет, как дела ?
                <div>
                    <input onChange={this.inputValue}/>
                    <button onClick={this.addValue}>Добавить</button>
                    <div>{this.state.arr[0].task}</div>
                </div>
                {this.state.arr[0].id}
            </div>
        )
    }
}

export default TodoPro;