import React,{useState} from "react";

const Counter = () => {
    const [count,setCounter] = useState(0);
    const [tags,setTags] = useState(['tag1','tag2','tag3']);

    const x = 'enpty';
    const formatCout = () => {
        return count === 0 ? x : count;
    }
    const getBageClasses =() => {
        let classes = 'badge m-2 '
        classes += count === 0 ? 'bg-warning' : 'bg-primary'
        return classes
    }
    const handleIncrement = () =>{
        setCounter((prevState) => prevState + 1)
        console.log(count);
    }
    const handleDecriment = () =>{
        setCounter((prevState) => prevState - 1)
    }
    const handleTagChange = (id) => {
        setTags(prevState => prevState.filter(tag => tag !== id))
    }
    const renderTags = () => {
        return  tags.length !== 0
       ? tags.map(tag =>(<li key={tag} className='btn btn-primary btn-sm m-2' onClick={() => handleTagChange(tag)}>{tag}</li>))
    :'No Tags'
    }


    return (
        <>
            <ul>
                {renderTags()}
            </ul>
            <span className={getBageClasses()}>{formatCout()}</span>
            <button className='btn btn-primary btn-sm m-2' onClick={handleIncrement}>+</button>
            <button className='btn btn-primary btn-sm m-2' onClick={handleDecriment}>-</button>

        </>
    );
};
export default Counter;