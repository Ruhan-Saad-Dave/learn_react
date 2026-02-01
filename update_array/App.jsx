import react, {useState} from 'react';

function App(){
    const [foods, setFood] = useState(["Apple", "Banana", "Cherry"]);

    function addFood(){
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";
        setFood(prevFoods => [...prevFoods, newFood]);
    }

    function removeFood(index){
        setFood(foods.filter((_, i) => i !== index));
    }

    return(
        <div>
            <h2>List of Foods:</h2>
            <ul>
                {foods.map((food, index) => 
                <li key={index} onClick={() => removeFood(index)}>{food}</li>)}
            </ul>
            <input type="text" id="foodInput" placeholder="Enter your food"/>
            <button onClick={addFood}>Add Food</button>
        </div>
    )
}
export default App;