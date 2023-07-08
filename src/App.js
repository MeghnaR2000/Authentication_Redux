import Navbar from "./component/common/Navbar";
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import Login from './pages/Login';
import Register from './pages/Register';
import { useDispatch } from "react-redux";
import Home from './pages/Home'
import About from './pages/About';
import Blog from './pages/Blog';
import { check_token } from './redux/AuthSlice';
import { useEffect } from "react";
import 'react-toastify/dist/ReactToastify.css'
import BlogDetails from './pages/BlogDetails';
import Footer from "./component/common/Footer";
import Student from "./pages/Student";
import Addstudent from "./pages/Addstudent";
import EditStudent from "./pages/EditStudent";

function App() {

  const dispatch = useDispatch();
  
  //token ache na nei check korbe jodi thake to page open hobe nhle login page e redirect korbe
  function PrivateRoute({ children }) {
    const token =localStorage.getItem("token") || sessionStorage.getItem("token");
    return token !== null && token !== undefined ? (
      children
    ) : (
      <Navigate to="/login" />
    );
  }

  const PrivateRouteNames = [
    {
      path: '/',
      Component: <Home />
    },
    {
      path: '/about',
      Component: <About />
    },
    {
      path: '/blog',
      Component: <Blog />
    },
    {
      path: '/blog-details/:id',
      Component: <BlogDetails />
    },
    {
      path: '/student',
      Component: <Student />
    },

    {
      path: '/addstudent',
      Component: <Addstudent />
    },

    {
      path: '/edit/:id',
      Component: <EditStudent />
    },
   
  ]

  //for Public Route
  const PublicRouteNames = [
    {
      path: "/login",
      Component: <Login />
    },
    {

      path: "/register",
      Component: <Register />
    }
  ]

  //Jate jotobar e click kori j kono page without login user k login page e show kore
  useEffect(() => {
    dispatch(check_token())
   }, [])

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          {PublicRouteNames?.map((route, index) => {
            return (
              <Route
                Key={index + 1}
                exact
                path={route.path}
                element={route?.Component}
              />
            )
          })}

          {PrivateRouteNames?.map((route) => {
              return (
                <Route
                  path={route.path}
                  element={<PrivateRoute>{route?.Component}</PrivateRoute>}
                />
              )

            })}
        </Routes>
        <Footer/>
      </Router>

    </>
  );
}

export default App;
