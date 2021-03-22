import '../src/style/App.css';
import HamBurgerMenu from '../src/components/HamBurgerMenu'

function App() {
  return (
    <div className="App">
      <div className='title'>
      <h1>MEDIA APPEREANCES</h1>
      <HamBurgerMenu />
      </div>
      <div className='section'>
      <div className='section1'>
        <div className="text1">
        <h2>Science</h2>
        <h2>Magazine</h2>
        <h2>11. 12. 2018</h2>
        <p>Want to master your professional and social networks to maximize rcognition?
          Want to learn how to build productive teams that create lasting impact?
          In this new book, The formula: The Universal Laws of Success, Albert-László Barabási translaters almost a decade
          of schorlarly research on the science of success into a lively...
        </p>
        </div>
        <p>READ MORE</p>
      </div>
      <div className='section2'>
      <div className="text2">

        <h2>Nature</h2>
        <h2>27. 11. 2018</h2>
        <p>Originally printed by the National Academies of Sciences as a poster to accompany the publication of a research
          paper on how diseases connect, it was subsequently reproduced by The New York Times and included in the Mapping import PropTypes from 'prop-types'
          Out: Atlas of Contemporary Cartographies exhibition at the Serpentine Gallery in London...
        </p>
        </div>
        <p>READ MORE</p>
      </div>
      <div className='section3'>
      <div className="text3">

        <p>Lecture at NYU</p>
        </div>
        <p>WATCH</p>
      </div>
      </div>
    </div>
  );
}

export default App;
