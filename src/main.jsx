import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import App from './App';
import ExplorePage from './pages/ExplorePage';
import DetailsPage from './pages/DetailsPage';
import SearchPage from './pages/SearchPage';
import axios from 'axios';
import { Provider } from 'react-redux';
import { store } from './store/store';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: ":explore",
        element: <ExplorePage />
      },
      {
        path: ":explore/:id",
        element: <DetailsPage />
      },
      {
        path: "search",
        element: <SearchPage />
      }
    ]
  }
]);

// Konfigurasi Axios dengan variabel lingkungan yang ada
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.headers.common['Authorization'] = `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
