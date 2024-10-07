import {Link} from "react-router-dom";

const Menu = () => {
    return <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/test1">Page exemple 1</Link>
            </li>
        </ul>
    </nav>
}

export default Menu;