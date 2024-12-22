import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import App from '../App';
import ExplorePage from '../pages/ExplorePage';
import DetailsPage from '../pages/DetailsPage';

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
            }
        ]
    }
]);

export default router;
