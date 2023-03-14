
import logo from "./logo.svg";
import {Link} from "react-router-dom";

function Homepage() {
    //let audio = new Audio(process.env.PUBLIC_URL + '/audio/introduction.mp3')

    return(
    <div>
        <h1>Updates 1 </h1>
        <Link to="/Introduction" className="routes_links">
        <button>
            Introduction
        </button>
        </Link>
    </div>


    )

}
export default Homepage;