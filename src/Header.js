import './Header.css'
import './App.css';
import logo from './logo.svg';

export default function Header() {
    return (
        <header className="header">
            
        <img src={logo} className="header--image App-logo" alt="logo" />
            <h2 className="header--title">Guess The Beast!</h2>
            <h4 className="header--project">React Project - Alex Labra</h4>
        </header>
    );
}

//<img src="./troll-face.png" className="header--image" alt="logo"/>