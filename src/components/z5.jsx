
import React from "react";

class Z5 extends React.Component {

    state={
        arr:[{ title: 'Марвел 1', year: '2001', desc: 'Описание',id: 1 },
                { title: 'Batman', year: '2005', desc: 'Описание' , id: 2},
                { title: 'Марвел 5', year: '2003', desc: 'Описание', id: 3 },

],
    }
    delLine = (id) =>{
        const delLine = this.state.arr.filter((item) => item.id !== id);
        this.setState({arr: delLine})

    }

    renderList =() =>{

       return  this.state.arr.map((item) =>{
           return  <tr key={item.id}>{
               Object.values(item).map((item)=>{
                   return <td>{item}</td>
               })
           }
               <td> <button onClick={() =>{this.delLine(item.id)}}>удалить</button> </td>
           </tr>
        })

    }
    renderThead = () => {
        return Object.keys(this.state.arr[0]).map((item) => {
            return (<th>
                {item}
            </th>)
        })

    }

    render() {

        return (
            <div>
                <table>
                    <thead>
                    <tr>
                        {this.renderThead()}
                        <th>кнопка</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.renderList()}

                    </tbody>
                </table>
                <div>
                    <button onClick={this.logi}>logi</button>
                </div>

            </div>
        );
    }
}
// function reducer(state,action) {
//     let arr = [...state];
//     if(action.type === 'ADD'){
//         // arr.push(action.payload)
//         return [...state,action.payload];
//     }
//     return arr
//
// }
// console.log(reducer([4], { type: 'ADD', payload: 5 }))

export default Z5;



