import React from "react";
class Zadanie2 extends React.Component {

    state = {
        start:0,
    }

    plus = () =>{
       let p =  this.state.start + 1
        this.setState({start:p})
    }
    minus = () =>{
       let m =  this.state.start -1
        this.setState({start:m})

    }




render() {

    return(
        <div>

            <h1>Counter</h1>
            <div><h3>{this.state.start}</h3></div>
            <button className='btn btn-primary btn-sm m-2' onClick={this.plus}>+</button>
            <button className='btn btn-primary btn-sm m-2' onClick={this.minus}>-</button>

        </div>
    )
}
}
export default Zadanie2;