import './App.css';
import illustration from './images/illustration.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">My recovery</header>
      <div className="body-text">
        Phasellus nec rhoncus turpis, id lacinia nisi. Quisque at turpis et dui
        pretium mattis non iaculis ligula. Fusce vel ligula pretium, blandit
        turpis ut, finibus nunc. Morbi vitae purus euismod, tempus nisi nec,
        eleifend sem. Praesent rutrum dictum metus et vestibulum. Etiam
        pellentesque dignissim ultrices.
      </div>
      <img src={illustration} alt="" />
    </div>
  );
}

export default App;
