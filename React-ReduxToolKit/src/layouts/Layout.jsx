import { Outlet } from "react-router-dom";
import AddTodo from "../components/AddTodos";
import Navigaton from "../components/Navigation/Navigation";

function Layout(){

    return(
        <>
            <AddTodo/>
            <Navigaton/>
            <Outlet/>
        </>    
    )
}

export default Layout;