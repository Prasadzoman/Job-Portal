import { Route, Routes } from 'react-router-dom';
import Listing from './components/Listing';
import Show from './components/Show';
import YourList from './components/pages/YourList';
import Profile from './components/pages/Profile';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import './App.css';
import AppliedJobs from './components/pages/AppliedJobs';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Make sure this path is correct */}
        <Route path="/" element={<Home />} />

        {/* Other routes */}
        <Route path="/AppliedJobs" element={<AppliedJobs />} />
        <Route path="/Job/:id" element={<Show />} />
        <Route path="/Listing" element={<YourList />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
