import  { useState } from 'react';
import { Link } from 'react-router-dom';
import { signedInNavLinks, signedOutNavLinks } from './navigationLinks';

function TopNav(isSignedIn) {
    const [count, setCount] = useState(0)

    return (
        <div>
            {/* TOP NAVIGATION */}
            <nav className="navbar-top-left">
                {isSignedIn ? (
                    <div>
                        <ul>
                            {signedInNavLinks.map(link => (
                                <Link key={link.text} to={link.path}>{ link.text }</Link>
                            ))}
                        </ul>
                        {/* other explicit links for logged-in users */}
                    </div>
                ) : ( 
                    <div>
                    <ul>
                        {signedOutNavLinks.map(link => (
                            <Link key={link.text} to={link.path}>{ link.text }</Link>
                        ))}
                    </ul>
                        <Link to="/signin">Sign In</Link>
                        <Link to="/register">Register</Link>
                    </div>
                )}
            </nav>
            );
            <nav className="navbar-top-left">
                
            </nav>
        </div>
    )
}

export default TopNav