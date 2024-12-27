import '../styles/main.scss'
import Navigation from "./components/navigation";
import Services from './components/services';
import Units from './components/units';
import About from './components/about';

export default function Home() {
  return (
    <>
      <header>
        <Navigation/>
      </header>

      <main>
        <Units/>
        <Services/>
        <About/>
      </main>

      <footer>

      </footer>
    </>
  );
}
