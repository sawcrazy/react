
import React from "react";

class Z5 extends React.Component {

    state={
        arr:[{ title: 'Марвел 1', year: '2001', desc: 'Описание' },
                { title: 'Batman', year: '2005', desc: 'Описание' },
                { title: 'Марвел 5', year: '2003', desc: 'Описание' },
],
    }
    delLine = () =>{

    }
    renderList =() =>{
        return this.state.arr.map((item) =>
            <tr className='tab' >
                <td className='tab'>{item.title}</td>
                <td className='tab'>{item.year}</td>
                <td className='tab'>{item.desc}</td>
                <td> <button onClick={this.delLine}>удалить</button> </td>
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

export default Z5;