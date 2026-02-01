import react, {useState} from "react";

function App() {
    const [count, setCount] = useState(0);

    function handleChange(){
        //setCount(count + 1);
        //setCount(count+ 1); not safe and wont work simulataneously
        setCount((prevCount) => prevCount + 1);
        setCount((prevCount) => prevCount + 1); //now safe and can work simultaneously
    }

    return(
        <div>
            <p>Count; {count}</p>
            <button onClick={handleChange}>Increase</button>
        </div>
    )
}
export default App;