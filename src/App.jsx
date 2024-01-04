import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import './App.css';
import background from './assets/backie.png'; 
import MainPage from './components/pages/MainPage';


function Canvas() {

  return (
    <div>
      <Parallax pages={1}>
        {/* Background  Layer */}
        <ParallaxLayer offset={0} speed={1}className='parallax-background' style={{ backgroundImage: `url(${background})` }}>
        </ParallaxLayer>
        {/* Content Layer */}
        <ParallaxLayer offset={0} speed={2.0}>
          <MainPage />
        </ParallaxLayer>
      </Parallax>
    </div>

  )
}

export default Canvas