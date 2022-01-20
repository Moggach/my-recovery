import Card from './components/Card';
import Illustration from './images/illustration.svg';

function App() {
  return (
    <div className="container mx-auto">
      <header className="font-bold">My recovery</header>
      <div className="">
        Phasellus nec rhoncus turpis, id lacinia nisi. Quisque at turpis et dui
        pretium mattis non iaculis ligula. Fusce vel ligula pretium, blandit
        turpis ut, finibus nunc. Morbi vitae purus euismod, tempus nisi nec,
        eleifend sem. Praesent rutrum dictum metus et vestibulum. Etiam
        pellentesque dignissim ultrices.
      </div>
      <img src={Illustration} alt="" />
      <Card />
    </div>
  );
}

export default App;
