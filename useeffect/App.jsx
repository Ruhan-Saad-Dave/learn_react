//do some code when: (1) the component re-renders (2) the component mounts (3)The state of value
//useEffect(function, dependencies)
//() => {} runs after every render
//() => {}, [] runs only on mount 
//() => {}, [value] runs on mount + value change
//uses
//1. event listener
//2. DOM manipulation 
//3. Subscriptions (real-time update)
//4. Fetching data from an API
//5. cleanup when a component unmounts

import React, {useState, useEffect} from 'react';

function App(){
    const [count, setCount] = useState(0);
    const [color, setColor] = useState('green');
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        document.title = `Count: ${count} ${color}`;
    }, [count]);//changes the title only when count changes, color stays the same, use[count, color] to change on both

    //window.addEventListener("resize", handleResize); //runs everytime and makes lots of trach in console
    useEffect(() => {
        window.addEventListener("resize", handleResize);
        console.log("Event listener called")

        return () => {
            window.removeEventListener("resize", handleResize);
            //free up resources when done with the component
            console.log("Event listener removed")
        }
    }, []);

    function addCount(){
        setCount(prevCount => prevCount + 1);
    }

    function changeColor(){
        setColor(prevColor => prevColor === 'green' ? 'red' : 'green');
    }
    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    return(
        <div>
            <p style={{color: color}}>Count: {count}</p>
            <button onClick={addCount}>Add</button><br/>
            <button onClick={changeColor}>Change Color</button><br/>
            <p>Width: {width}px</p>
            <p>Height: {height}px</p>
        </div>
    )
}
export default App;