import "tailwindcss";
import './App.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import ForsideView from "./views/ForsideView";
import YdelserView from "./views/YdelserView";
import CasesView from "./views/CasesView";
import CeraceraView from "./views/CeraceraView";
import BlogView from "./views/BlogView";
import FemtipsView from "./views/FemtipsView";
import OmosView from "./views/OmosView";
import KontaktView from "./views/KontaktView";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>, 
    children: [
      {
        index: true,
        element: <ForsideView/>
      },
      {
        path: "/ydelser",
        element: <YdelserView/>
      },
      {
        path: "/cases",
        element: <CasesView/>
      },
      {
        path: "/cases/cera-cera",
        element: <CeraceraView/>
      },
      {
        path: "/blog",
        element: <BlogView/>
      },
      {
        path: "/blog/fem-tips",
        element: <FemtipsView/>
      },
      {
        path: "/om-os",
        element: <OmosView/>
      },
      {
        path: "/kontakt",
        element: <KontaktView/>
      },
    ]
  }
]
)

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
