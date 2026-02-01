
function Button(){
    const handleClick = (name) => {
        console.log(`Button clicked by ${name}!`);
    }
    const doubleClick = (e) => {
        e.target.textContent = "Ouch!";
    }

    return(
        <button onClick={() => handleClick("bro")} onDoubleClick={(e)=>doubleClick(e)}>Click me</button> //without () => function executes immediately
    );
}
export default Button;
