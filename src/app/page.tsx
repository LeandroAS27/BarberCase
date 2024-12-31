import '../styles/main.scss'
import Navigation from "./components/navigation";
import Services from './components/services';
import Units from './components/units';
import About from './components/about';
import Contact from './components/contact';
import Footer from './components/footer';
import WhatsappButton from './components/whatsappButton';

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
        <Contact/>
      </main>
      <WhatsappButton/>

      <footer>
        <Footer/>
      </footer>
    </>
  );
}
