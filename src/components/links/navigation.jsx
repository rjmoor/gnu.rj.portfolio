import TopNav from './topNav'
import BottomNav from './bottomNav'

function Navigation() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* TOP NAVIGATION */}
      {/* Fix sign in here... Only show signed in links from TopNav when signed in */}
      <TopNav />
      {/* BOTTOM NAVIGATION */}
      <BottomNav />
    </>
  )
}

export default Navigation
