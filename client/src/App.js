import { Provider } from "react-redux";
import "./App.css";
import { BrowserRouter, RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import SearchPage from "./components/SearchPage";
import Root from "./components/Root";
import Shorts from "./components/Shorts";

const appRouter = createBrowserRouter([{
  path:"/",
  element:<Root/>,
  children: [
    {
      path: "/",
      element: <MainContainer/>
    },
    {
      path:"/watch",
      element: <WatchPage/>
    },
    {
      path:"/results",
      element: <SearchPage/>
    },
    {
      path:"/shorts",
      element:<Shorts/>
    }
  ]
}])
function App() {
  return (
    <div className="App dark:bg-black dark:text-gray-300">
    <RouterProvider router={appRouter}/>  
    </div>   
  );
}

export default App;
