import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import '../styles/welcomePage.css';


function WelcomePage() {

    return(
        <div className='container'>
            <Parallax pages={3} >
                <ParallaxLayer offset={0} speed={1} className='heroLayer'>
                    <div className='parallax'>
                        <header className='primary-header'></header>
                        <h1>You are in the most perfect place right now...</h1>
                        <img className='heroLayer'></img>
                        <img className='parallax_bg'></img>
                        <p>This is what the content text looks like.</p>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={1} speed={2} className='center'style={{ backgroundColor: "#ff779d"}}>
                    <div>
                        Page 2
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={2} speed={0.25} className='center'style={{ backgroundColor: "#ff5577"}}>
                    <div>
                        Page 3
                    </div>
                </ParallaxLayer>
            </Parallax>
        </div >
    )
}

export default WelcomePage