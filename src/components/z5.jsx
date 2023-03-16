
import React from "react";

class Z5 extends React.Component {

    state={
        arr:[{ title: 'Марвел 1', year: '2001', desc: 'Описание',id: 1,},
                { title: 'Batman', year: '2005', desc: 'Описание' , id: 2},
                { title: 'Марвел 5', year: '2003', desc: 'Описание', id: 3 },

],
        input: '',
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
    searchText = (event) => {
        let input = event.target.value;
        this.setState({input: input})

    }
    search = () =>{
        let test =  this.state.arr.filter((item) =>
            item.title.toLowerCase()
            .includes(this.state.input.toLowerCase()));
        this.setState({arr: test})


    }

    render() {

        return (
            <div>
                <div>
                    <input type="text" value={this.state.input} onChange={this.searchText}/>
                    <button onClick={this.search}>Поиск</button>
                </div>
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
//     switch(action.type){
//         case 'ADD' :
//             return [...state,action.payload];
//         case 'REMOVE' :
//             return state.filter((item) => item !== action.payload);
//         case 'CHANGE' :
//             return state.map((item,index) =>{
//                 if(index === action.payload.index){
//                     return action.payload.value
//                 }
//                 return item
//
//             })
//     }
//
// }
let obj = {key1:'key1',key2:'key1',};
function reducer(state,action) {
    let clone = {...state};
    switch (action.type){
        case 'ADD' :
            // clone[action.payload.key] = action.payload.value
            return {...state,[action.payload.key]: action.payload.value};
        case 'REMOVE' :
            return {...state, [action.payload]: undefined}
            // return clone
        case 'CHANGE' :
            if (action.payload.key in clone){
                clone[action.payload.key] = action.payload.value
                return clone
            }

    }

}

// function reducer(state,action) {
//     // let clone = {...state};
//     switch (action.type){
//         case 'ADD' :
//             state[action.payload.key] = action.payload.value
//             return state;
//         case 'REMOVE' :
//             delete state[action.payload]
//             return state
//         case 'CHANGE' :
//             if (action.payload.key in state){
//                 state[action.payload.key] = action.payload.value
//                 return state
//             }
//
//     }
//
// }

console.log(reducer(obj, { type: 'ADD', payload: { key: 'rscn', value: 2500 } }))

// console.log(obj)
// console.log(reducer(obj, { type: 'ADD', payload: { key: 'ssss', value: 35} }))
// console.log(obj)
console.log(reducer({key1:'key1',key2:'key2',}, { type: 'REMOVE', payload: 'key2' }))
console.log(obj)
// console.log(reducer({key1:'key1',key2:'key1',}, {  type: 'CHANGE', payload: { key: 'key1', value: 250 } }))

export default Z5;



