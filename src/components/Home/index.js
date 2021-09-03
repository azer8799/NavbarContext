// Write your code here
import ThemeContext from '../../context/ThemeContext'
import './index.css'
import Navbar from '../Navbar'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const imageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'

      const homeHeading = isDarkTheme ? 'white-text' : 'dark-text'

      const homeContainer = isDarkTheme ? 'dark-background' : 'light-background'

      return (
        <>
          <Navbar />
          <div className={homeContainer}>
            <img src={imageUrl} alt="home" className="home-logo" />
            <h1 className={homeHeading}>Home</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
