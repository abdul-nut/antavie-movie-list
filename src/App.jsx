import { Outlet } from 'react-router-dom';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import MobileNavigation from './components/MobileNavigation.jsx';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setBannerData, setImageUrl } from './store/antavieSlice.js';

function App() {

  const dispatch = useDispatch();
  const fetchTrendingData = async () => {
    try {
      const response = await axios.get('/trending/all/week')
      dispatch(setBannerData(response.data.results))
    } catch (error) {
      console.log('error', error);

    }
  }

  const fetchConfiguration = async () => {
    try {
      const response = await axios.get('/configuration')
      dispatch(setImageUrl(response.data.images.secure_base_url + "original"))
    } catch (error) {
      console.log(error);

    }
  }

  useEffect(() => {
    fetchTrendingData()
    fetchConfiguration()
  }, [])

  return (
    <main className='pb-14 lg:pb-0'>
      <Header />
      <div className='min-h-[90vh]'>
        <Outlet />
      </div>
      <Footer />
      <MobileNavigation />
    </main>
  );
}

export default App;
