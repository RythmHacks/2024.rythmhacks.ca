import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Landing from "./pages/Landing";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Landing />,
    },
]);

function App() {
    return <RouterProvider {...{ router }} />;
}

export default App;
