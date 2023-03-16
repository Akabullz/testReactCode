import {Link, useMatch, useResolvedPath,} from "react-router-dom"

export default function Navbar (){
    return (
        <nav className="nav">
            <Link to="/" className="site=title"> 
            Jummah Salaah 
            </Link>
            <ul>
                <CustomLink to="/components/Login">Login</CustomLink>
                <CustomLink to="/components/Signup">Sign up</CustomLink>
            </ul>
        </nav>
    )
}

function CustomLink ({ to, children, ...props}) {
    const resoldvedPath = useResolvedPath(to)
    const isActive = useMatch ({path: resoldvedPath.pathname, end:true})

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
            {children}
            </Link>
        </li>
    )
}