
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
        return this.state.arr.map((item) =>
            <tr key={item.id} className='tab' >
                <td className='tab'>{item.title}</td>
                <td className='tab'>{item.year}</td>
                <td className='tab'>{item.desc}</td>
                <td> <button onClick={()=> this.delLine(item.id)}>удалить</button> </td>
            </tr>
        )

    }
    render() {
        let keys = Object.keys(this.state.arr[0]);
        return (
            <div>
                <table className='tab'>
                    <tr className='tab' >
                        <th className='tab'>{keys[0]}</th>
                        <th className='tab'>{keys[1]}</th>
                        <th className='tab'>{keys[2]}</th>
                    </tr>
                {this.renderList()}
                </table>

            </div>
        );
    }
}
function reducer(state,action) {
    let arr = [...state];
    if(action.type === 'ADD'){
        // arr.push(action.payload)
        return [...state,action.payload];
    }
    return arr

}
console.log(reducer([4], { type: 'ADD', payload: 5 }))

export default Z5;



