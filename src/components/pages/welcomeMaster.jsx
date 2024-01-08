import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Background_a from "../../assets/Portfolio-Background-0a.png";
import Background_b from "../../assets/Portfolio-Background-0b.png";
import Background_c from "../../assets/Portfolio-Background-0c.png";
import Background_d from "../../assets/Portfolio-Background-0d.png";
import Background_e from "../../assets/Portfolio-Background-0e.png";
import "../styles/welcomeMaster.css";

export default function WelcomeMaster() {

    return (
        <Parallax pages={6} className='parallax'>
            <div className="container">
                <ParallaxLayer className='heroLayer' offset={0} speed={2}>
                    <div className="elements">
                        <div className="hero">
                            <h1 className="hero">Welcome to your Space and Time Rahm</h1>
                        </div>
                        <div className="first">
                            <p className="firstTagLine">This is a place for you to create, build, and explore your ideas.</p>
                        </div>
                        <div className='background'>
                            <img src={Background_a} alt="background1" className="back-a"/>
                            <img src={Background_b} alt="background2" className="back-b"/>
                            <img src={Background_c} alt="background3" className="back-c"/>
                            <img src={Background_d} alt="background4" className="back-d"/>
                            <img src={Background_e} alt="background5" className="back-e" />
                        </div>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer className='introLayer' offset={1} speed={1}>
                    <div className="intro">
                        <p className="firstParagraph">This is a place for you to create, build, and explore your ideas.</p>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer className='promoLayer' offset={2} speed={1}>
                    <div className="promo-1">
                        <p className="promo-1">This is the second parallax page section - About</p>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer className='heroLayer' offset={3} speed={1}>
                    <div className="promo-2">
                        <p className="promo-2">This is the third parallax page section - Projects</p>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer className='heroLayer' offset={4} speed={1}>
                    <div className="promo-3">
                        <p className="promo-3">This is the fourth parallax page section - Contact form</p>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer className='heroLayer' offset={5} speed={1}>
                    <div className="promo-4">
                        <p className="promo-4">(optional footer)This is the fifth parallax page section</p>
                    </div>
                </ParallaxLayer>
            </div>
        </Parallax>       
    )

}