import "../styles/welcomePage.css"
import Background_a from "../../assets/Portfolio-Background-0a.png"
import Background_b from "../../assets/Portfolio-Background-0b.png" 
import Background_c from "../../assets/Portfolio-Background-0c.png"
import Background_d from "../../assets/Portfolio-Background-0d.png"
import Background_e from "../../assets/Portfolio-Background-0e.png"


export default function WelcomePage() {
    return (
        <div className="container">
            <div className="parallax-bg">
                <img src={Background_a} alt="background1" className="back-a"/>
                <img src={Background_b} alt="background2" className="back-b"/>
                <img src={Background_c} alt="background3" className="back-c"/>
                <img src={Background_d} alt="background4" className="back-d"/>
                <img src={Background_e} alt="background5" className="back-e" />
            </div>
            <div>
                <header>
                <h1>Welcome Rahm</h1>
                </header>
            </div>
            <div className="hero">
                This is the hero section. The background is behind this text.
            </div>
                <div className="heroPromo-1">This should be the second parallax page section - About</div>
                <div className="heroPromo-2">This should be the third parallax page section - Projects</div>
                <div className="heroPromo-3">This should be the fourth parallax page section - Contact form</div>
                <div className="footer heroPromo-4">(optional footer)This should be the fifth parallax page section</div>
            
        </div>
    )
}

