import React from "react";
class Z4 extends React.Component{
    state = {
            list: [1,2,3,4,5],
            input1: '',
            input2: '',
        }
    change1 = (event) => {
        let str = event.target.value;
        this.setState({input1: str})
    }
    change2 = (event) => {
        let str = event.target.value;
        this.setState({input2: str})
    }
    delElement = () =>{
            let num = +(this.state.input1);
            let newList = this.state.list.filter((item) => item !== num);
            this.setState({list: newList})
    }
    addElement =() =>{
    //     let num = +(this.state.input2);
    //     let newList = [...this.state.list]
    //     newList.push(num)
        this.setState({list: [...this.state.list,+this.state.input2]})
    }
    renderList = () =>{
        return this.state.list.map((item) => <div className='box'>{item}</div>)
    }

    render() {
        return (
            <div className='container1'>
                <div >{this.renderList()}</div>
                <div>
                    <input type="text" value={this.state.input1} onChange={this.change1}/>
                    <button onClick={this.delElement}>удалить</button>
                </div>
                <div>
                    <input type="text" value={this.state.input2} onChange={this.change2}/>
                    <button onClick={this.addElement}>добавить</button>
                </div>

            </div>
        )
    }
}

export default Z4;