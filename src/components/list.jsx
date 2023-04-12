import React from "react";
import Rlist from "./rlist";


class List extends React.Component {
    state = {
        posts: [],
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(posts => this.setState({ posts }));
    }
    renderThead = () => {
      return Object.keys(this.state.posts[0]).map((item,index) =>{
            if(index <= 3){
                return (
                    <th key={item.id}>{item}</th>
                )
            }

        })

    }
    renderList = () =>{
        return this.state.posts.map((item,index) =>{
                return (
                    <tr key={item.id}>
                        {
                            Object.values(item).map((item,index)=>{
                                if(index <=3){
                                    return <td>{item}</td>
                                }

                            })
                        }
                    </tr>
                )


        })
    }
   render() {
        if (this.state.posts.length === 0){
            return (
                <div> LOging</div>
            )
        }else {
            return (

                <table>
                    <thead>
                    <tr>
                        {this.renderThead()}
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.renderList()
                    }

                    </tbody>
                </table>
            )
        }

   }

};

export default List;