import react, {useState} from 'react'; //Object destructuring

function Component(){
    const [name, setName] = useState();
    const [isEmployee, setIsEmployee] = useState(false);
    const [age, setAge] = useState(20);

    const update = () => {
        setName("Bro");
    }

    const updateEmployee = () => {
        setIsEmployee(!isEmployee);
    }

    const increaseAge = () => {
        setAge(age + 1);
    }

    const decreaseAge = () => {
        setAge(age - 1);
    }

    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={update}>Update name</button>
            <p>Is employeed: {isEmployee ? "Yes" : "No"}</p>
            <button onClick={updateEmployee}>Update Employee</button>
            <p>Age: {age}</p>
            <button onClick={increaseAge}>Increase Age</button>
            <button onClick={decreaseAge}>Decrease Age</button>
        </div>
    );
}
export default Component;