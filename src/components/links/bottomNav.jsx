import { useState } from 'react'
import { bottomNavLinks } from './navigationLinks'

function BottomNav() {
    const [count, setCount] = useState(0)

    return (
        <>
            {/* BOTTOM NAVIGATION */}
            <nav className="navbar-bottom-right">
                <ul>
                    { bottomNavLinks.map(link => (
                        <li key={link.text}>
                            <a className="nav-link" href={link.path} target="_blank" rel="noopener noreferrer">
                                {link.text}
                            </a>
                        </li>))}
                </ul>
            </nav>
        </>
    )
}

export default BottomNav