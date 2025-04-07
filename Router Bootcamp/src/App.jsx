import "./App.css"
import AboutPage from "./pages/AboutPage/AboutPage";
import HomePage from "./pages/HomePage/HomePage";
import ContactPage from "./pages/ContactPage/ContactPage";
import Errorpage from "./pages/ErrorPage/ErrorPage";

import { createBrowserRouter, RouterBrowser } from "react-router-dom";

const router = createBrowserRouter({

  {
    path: "/",
    element: < Errorpage />

  },

  {
    path: "/HomePage"
  element: < HomePage />
  }
})



function App() {
  return (
    <div> className="app"

    </div>
  )
}

export default App;
