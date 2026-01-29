import UserGreeting from './UserGreeting.jsx';

function App() {
    return(
        <>
            <UserGreeting isLoggedIn={true} userName="Bro"/>
            <UserGreeting isLoggedIn={false} userName="Bro"/>
        </>
    );
}

export default App;