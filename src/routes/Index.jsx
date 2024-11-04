import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import App from '../App';

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
