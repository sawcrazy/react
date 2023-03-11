import React from "react";

class TodoPro extends React.Component {
    state = {
        arr:[{
            id:0,
            task:'',
        }],
        input: '',
    }
    inputValue = (event) =>{
        let input = event.target.value;
        this.setState({input:input})

    }
    addValue = () =>{
        let id = this.state.arr.length;
        let arrItem = {
            id: id,
            task: this.state.input,
        };
        let newArr = [...this.state.arr,arrItem]
        this.setState({arr: newArr})
        console.log(newArr)
    }
    renderList = () =>{

       return  this.state.arr.map((item) =>{
           if(item.task !== ''){
               return(
                   <li key={item.id}>
                       {item.task}
                       <button onClick={()=>{this.deleteList(item.id)}}>delete</button>
                   </li>

               )
           }
           return

        })

    }
    deleteList =(id) =>{
        let arr = this.state.arr.filter((item,) => item.id !== id);

        this.setState({arr: arr})
    }



    render() {
        return(
            <div>
                Привет, как дела ?
                <div>
                    <input onChange={this.inputValue}/>
                    <button onClick={this.addValue}>Добавить</button>
                    <div>{this.state.input}</div>
                    <div>
                        <ul>
                            {this.renderList()}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default TodoPro;