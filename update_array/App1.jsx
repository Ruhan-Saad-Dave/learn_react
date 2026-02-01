import react, {useState} from 'react';

function App(){
    const [cars, setCar] = useState([])
    const [year, setYear] = useState(new Date().getFullYear())
    const [model, setModel] = useState('')
    const [color, setColor] = useState('')

    function addCar(){
        const newCar = {Year: year, Model: model, Color: color};

        setCar(prevCar => [...prevCar, newCar]);
        setYear(new Date().getFullYear());
        setModel('');
        setColor('');
    }
    function removeCar(index){
        setCar(prevCar => prevCar.filter((_, i) =>
            i !== index
        ));
    }
    function handleYear(event){
        setYear(event.target.value);
    }
    function handleModel(event){
        setModel(event.target.value);
    }
    function handleColor(event){
        setColor(event.target.value);
    }

    return(
        <div>
            <h1>Car Inventory</h1>
            <ul>
                {cars.map((car, index) => 
                    <li key={index} onClick={() => removeCar(index)}>
                        {car.Year} {car.Model} {car.Color}
                    </li>
                )}
            </ul>
            <div>
                <input type="number" value={year} onChange={handleYear}/><br/>
                <input type="text" value={model} placeholder="Enter car model" onChange={handleModel}/><br/>
                <input type="text" value={color} placeholder="Enter car color" onChange={handleColor}/><br/>
                <button onClick={addCar}>Add Car</button>
            </div>
        </div>
    )
}
export default App;