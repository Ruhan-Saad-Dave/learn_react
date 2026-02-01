import react, {useState} from 'react';

function ColorPicker(){
    const [color, setColor] = useState();

    function handleChange(event){
        setColor(event.target.value);
    }

    return(
        <div>
            <h1>Color Picker</h1>
            <div style={{backgroundColor: color}}>
                <p>Selected color: {color}</p>
                <input type="color" onChange={handleChange} />              
            </div>
        </div>
    )
}
export default ColorPicker;