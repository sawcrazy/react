import React from "react";

class Zadan3 extends React.Component {

    state = {
        value: '',
    }

    handleChange = (event) => {
        let str = event.target.value;
        console.log(str)
        this.setState({value: str})
    }

    render() {
        return (
            <form>
                <label>
                    Ввидите текс:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                    <div>{this.state.value}</div>
                </label>
            </form>
        );
    }
    }



export default Zadan3;