import react, {useState} from 'react';

function Component(){
    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState(1);
    const [payment, setPayment] = useState();
    const [shipping, setShipping] = useState();

    const handleChange = (event) => {
        setName(event.target.value);
    }
    const handleQuantity = (event) => {
        setQuantity(event.target.value);
    }
    function handlePayment(event){
        setPayment(event.target.value);
    }
    function handleShipping(event){
        setShipping(event.target.value);
    }

    return(
        <div>
            <input value={name} onChange={handleChange}></input>
            <p>Name: {name}</p>
            <input value={quantity} onChange={handleQuantity} type="number"></input>
            <p>Quantity: {quantity}</p>
            <select onChange={handlePayment} value={payment}>
                <option value="">Select a payment method</option>
                <option value="credit card">Credit Card</option>
                <option value="paypal">PayPal</option>
                <option value="bitcoin">Bitcoin</option>
            </select>
            <p>Payment method: {payment}</p>
            <label>
                <input type="radio" value="Pick up" checked={shipping === "Pick up"}
                onChange={handleShipping}/>
                Pick up
            </label>
            <label>
                <input type="radio" value="Delivery" checked={shipping === "Delivery"}
                onChange={handleShipping}/>
                Delivery
            </label>
            <p>Shipping method: {shipping}</p>
        </div>
    )
}
export default Component;