// Write your code here
import ThemeContext from '../../context/ThemeContext'
import './index.css'
import Navbar from '../Navbar'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const imageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'

      const aboutHeading = isDarkTheme ? 'white-text' : 'dark-text'

      const aboutContainer = isDarkTheme
        ? 'dark-background'
        : 'light-background'

      return (
        <>
          <Navbar />
          <div className={aboutContainer}>
            <img src={imageUrl} alt="about" className="about-logo" />
            <h1 className={aboutHeading}>About</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
