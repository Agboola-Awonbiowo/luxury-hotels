import Navbars from "./components/Navbars";
import Advert from "./components/Advert";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="grid-container">
      <header className="row">
        <Navbars />
        <img src="../img/pexels-jimmy-chan-1458457.jpg" alt="" />
      </header>

      <main>
        <Advert />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
