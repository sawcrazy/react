import React from "react";
const arr = [{title:1},{title:2}];


class Test extends React.Component{
    state = {
        list: arr,
    }
    testFun = () => {

      const arrNew =  this.state.list.filter((item) => item.title === 2)
        this.setState({list: arrNew})
    }


    render(){
        let arry2;
        arry2 = this.state.list.map((item) =>  <div>{item.title}</div>)
        return (

            <div>
                {arry2}
                <button onClick={this.testFun}>delete</button>
            </div>

        )
    }
}
export default Test;