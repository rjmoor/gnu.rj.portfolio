import { Parallax, ParallaxLayer } from '@react-spring/parallax';
// import Background from '../../assets/rj-hero.jpg';


function WelcomePage() {

    return(
        <div>
            <Parallax pages={3} style={{ backgroundImage: "linear-gradient(#e66466, #919ea5)"}}>
                <ParallaxLayer offset={0} className='center'>
                    <div>
                        Page 1
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={1} className='center'>
                    <div>
                        Page 2
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={2} className='center'>
                    <div>
                        Page 3
                    </div>
                </ParallaxLayer>
            </Parallax>
        </div >
    )
}

export default WelcomePage