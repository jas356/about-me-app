import Grid from './components/Grid.jsx';
import Video from './components/Video.jsx';
import Quote from './components/Quote.jsx';
import About from './components/About.jsx';
import Caroseul from './components/Caroseul.jsx';
import Footer from './components/Footer.jsx';

import './App.css';

function App() {
  return (
    <div className="App">
      <About />
      <Caroseul />
      <Quote />
      <Grid />
      <Video />
      <Footer />
     
    </div>
  );
}

export default App;
