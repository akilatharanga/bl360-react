import { Routes, Route, Link } from 'react-router-dom';
import AuthUser from '../components/AuthUser';
import Home from '../Pages/Home';
function Auth() {
    // const {token,logout} = AuthUser();
    // const logoutUser = () => {
    //     if(token != undefined){
    //         logout();
    //     }
    // }
    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>                   
                    {/* <li className="nav-item">
                        <span role="button" className="nav-link" onClick={logoutUser}>Logout</span>
                    </li> */}

                </ul>

            </nav>
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </div>
        </>
    );
}

export default Auth;
