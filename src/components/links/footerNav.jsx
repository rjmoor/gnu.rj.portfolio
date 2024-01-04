import { socialLinks } from "./navigationLinks";

function FooterNav() {
    return (
        <>
            <ul>
                {socialLinks.map(link => (
                    <li key={link.text}>
                        <a className='nav-link-footer' href={link.path} target="_blank" rel='noopener noreferrer' >
                            {link.text}
                        </a>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default FooterNav