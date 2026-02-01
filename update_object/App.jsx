import react, {useState} from 'react';

function App(){
    const [car, setCar] = useState({year: 2024, model: "Ford", color: "Red"});

    function handleYear(event){
        //setCar(year: 2025) makes the model and color disappear
        setCar({...car, year: event.target.value}); //disregards 1st ket if duplicate
        //setCar(prevCar => ({...prevCar, year: event.target.value})); //safer method
    }

    function handleModel(event){
        setCar({...car, model: event.target.value});
    }
    function handleColor(event){
        setCar({...car, color: event.target.value});
    }

    return(
        <div>
            <p>My car is: {car.year} {car.model} {car.color}</p>
            <label>
                Choose year:
                <input type="number" value={car.year} onChange={handleYear}/>
                <br/>
            </label>
            <label>
                Choose model:
                <input type="text" value={car.model} onChange={handleModel}/>
                <br/>
            </label>
            <label>
                Choose color:
                <input type="text" value={car.color} onChange={handleColor}/>
                <br/>
            </label>
        </div>
    )
}
export default App;