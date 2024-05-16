import './style.css';
import './fonts.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageHeader from './components/PageHeader';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import EventsPage from './components/EventsPage';
import VideosPage from './components/VideosPage';

function App() {

  return (
    <Router>
      <PageHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/videos" element={<VideosPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
