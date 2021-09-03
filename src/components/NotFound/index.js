// Write your code here
import './index.css'
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const notfoundContainer = isDarkTheme ? 'dark-bg' : 'light-bg'

      const headingClassName = isDarkTheme ? 'white-text' : 'dark-text'

      const descClassName = isDarkTheme ? 'white-text' : 'dark-text'

      return (
        <>
          <Navbar />
          <div className={notfoundContainer}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
              className="notfound-image"
            />
            <h1 className={headingClassName}> Lost Your Way ?</h1>
            <p className={descClassName}>
              We cannot seem to find the page you are looking for.
            </p>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
