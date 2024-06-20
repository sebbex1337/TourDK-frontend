import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Riders</NavLink>
                </li>
                <li>
                    <NavLink to="/teams">Teams</NavLink>
                </li>
            </ul>
        </nav>
    );
}
