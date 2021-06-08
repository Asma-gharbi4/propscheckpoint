import './App.css';
import Profile from './profile/Profile';

function App() {
    const Handlename = name => alert(name);
    return ( <div className="App">
        <Profile Fullname="Asma Gharbi" bio="Nothing" profession="Ingénieur" Handlename={Handlename}>
        <img className = "Photo" src = "./Asma.PNG" alt = "profilphoto"/></Profile>
        </div>
    );
}

export default App;