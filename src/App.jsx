import './App.css';
import WelcomeMaster from './components/pages/welcomeMaster';
import SignUp from './components/signup/sign_3';
import MadLibsEngine from './components/cards/projects/project-madlib/madlib';


function App() {

  return (
    
    <div>
      <SignUp />
      <WelcomeMaster />
      <MadLibsEngine />
    </div>

  )
}

export default App