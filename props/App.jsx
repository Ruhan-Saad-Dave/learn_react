import Student from './Student.jsx';

function App(){
    return(
        <>
            <Student name="Alpha" age={30} isStudent={true}/>
            <Student name="Beta"/>
            <Student name="Gamma"/>
        </>
    );
}

export default App;