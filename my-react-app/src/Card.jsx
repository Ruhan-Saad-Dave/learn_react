import coverPicture from './assets/background.jpeg';

function Card(){

    return(
        <div className="card">
            <img alt="profile picture" src="https://via.placeholder.com/150"></img>
            <img className="card_image" alt="cover picture" src={coverPicture}></img>
            <h2 className="card_title">My name</h2>
            <p className="card_text">I play games</p>
        </div>
    );
}

export default Card;