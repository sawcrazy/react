import React, {useState} from "react";
const arr = [1,2,3,4,5];

class Zadanee1 extends React.Component {

    state = {
        list: arr,
    }
    deledeFirst = () =>{
        console.log(arr.length)
       let newArr1 = this.state.list.filter((item,index) => index !== 0)
        this.setState({list:newArr1})
    }
    deledeLast = () =>{
        let newArr2 = this.state.list.filter((item,index,arr) => index !== (arr.length - 1))
        console.log(newArr2)
        this.setState({list:newArr2})

    }
    change = () =>{
        let newArr3 = this.state.list.slice()
        newArr3[2] = 55
        this.setState({list:newArr3})

        // let newArr3 = this.state.list.map((item,index) => {
        //     if(index === 2){
        //         item= 55;
        //     }
        // })
        // console.log(this.state.list[2])
    }

   render() {
       let sum = this.state.list.reduce((acc,sum) => acc + sum,0);
        let arrNew
        arrNew = this.state.list.map((item) => <div className='box'>{item}</div>)
        return (
            <div className='container1'>
                <div >{arrNew}</div>
                <div className='but'>
                    <div>
                    <button onClick={this.deledeFirst}>Delete first</button>
                </div>
                    <div>
                        <button onClick={this.deledeLast}>Delete last</button>
                    </div>
                    <div>
                        <button onClick={this.change}>change</button>
                    </div>
                </div>
                <div>{sum}</div>

            </div>

        )
   }
}

export default Zadanee1;