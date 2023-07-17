import {Link} from "react-router-dom";
import './navbar.scss'

function Navbar() {
    return (
        <div className="sum">
            <div className="logo">
                Beaters & Co.
            </div>
            <nav className="item">
                <ul className="ul">
                 <li>
                     <Link to="/">Home</Link>
                 </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/shop">Shop</Link>
                    </li>
                    <li>
                        <Link to="/metronome">Metronome</Link>
                    </li>
                    <li>
                        <Link to="/careers">Careers</Link>
                    </li>
                </ul>

            </nav>
        </div>
    );
}

export default Navbar;