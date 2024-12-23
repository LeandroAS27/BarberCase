import '../styles/main.scss'
import Navigation from "./components/navigation";
import Services from './components/services';
import Units from './components/units';

export default function Home() {
  return (
    <>
      <header>
        <Navigation/>
      </header>

      <main>
        <Units/>
        <Services/>
      </main>

      <footer>

      </footer>
    </>
  );
}
