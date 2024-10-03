import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import { useEffect, useState } from 'react'
import axios from 'axios'
import NotFound from './pages/NotFound'


function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=10');
        setUsers(response.data.data.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchData();
  }, []);


  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home users={users} />} />
        <Route path='/about' element={<About />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
