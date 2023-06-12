import './App.css';
import Navbar from './components/Navbar/navbar';
import Title from './components/Body/title';
import Description from './components/Body/description';
import OurOfferings from './components/Body/ourOfferings';
import Faq from './components/Body/faq';
import Footer from './components/Body/footer';
import ContactUs from './components/Body/contactUs';
import Blogs from './components/Body/blogs';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Title />
      <Description />
      <OurOfferings />
      <Faq />
      <Blogs />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
