import {Navbar,Nav} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

function Header ()
{
    return(
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">E-comm</Navbar.Brand> 
                <Nav className="mr-auto navbar-warapper">
                    <NavLink to={"/add"} >Add Product</NavLink>
                    <NavLink to={"/update"} >Update Product</NavLink>
                    <NavLink to={"login"} >Login</NavLink>
                    <NavLink to={"/register"} >Register</NavLink>
                </Nav>
            </Navbar>            
        </div>
    )
}