
import React from "react";

class Z5 extends React.Component {

    state={
        arr:[{ title: 'Марвел 1', year: '2001', desc: 'Описание' },
                { title: 'Batman', year: '2005', desc: 'Описание' },
                { title: 'Марвел 5', year: '2003', desc: 'Описание' },
],
    }
    renderList =() =>{
        return this.state.arr.map((item) =>
            <tr className='tab' >
                <td className='tab'>{item.title}</td>
                <td className='tab'>{item.year}</td>
                <td className='tab'>{item.desc}</td>
            </tr>
        )
    }
    render() {
        return (
            <div>
                <table className='tab'>
                    <tr className='tab' >
                        <th className='tab'>name</th>
                        <th className='tab'>yers</th>
                        <th className='tab'>desc</th>
                    </tr>
                {this.renderList()}
                </table>

            </div>
        );
    }
}

export default Z5;