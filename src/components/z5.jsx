
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
            <tr>
                <td>{item.title}</td>
                <td>{item.year}</td>
                <td>{item.desc}</td>
            </tr>
        )
    }
    render() {
        return (
            <div>
                <table className='tab'>
                    <tr>
                        <th>name</th>
                        <th>yers</th>
                        <th>desc</th>
                    </tr>
                {this.renderList()}
                </table>

            </div>
        );
    }
}

export default Z5;