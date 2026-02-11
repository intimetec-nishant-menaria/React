import { NavLink } from "react-router-dom";
import "./style.css"

function Navigaton(){

    return (
        <div className="layout">
            <div className="filter-buttons">
                <NavLink to="/todo/all" className={({isActive})=> isActive ? "filter-btn active" : "filter-btn"}>
                    All
                </NavLink>
                <NavLink to="/todo/complete" className={({isActive})=> isActive ? "filter-btn active" : "filter-btn"}>
                    Complete
                </NavLink>
                <NavLink to="/todo/pending" className={({isActive})=> isActive ? "filter-btn active" : "filter-btn"}>
                    Pending
                </NavLink>
            </div>
        </div>
    )
}

export default Navigaton;