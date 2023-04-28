import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fontsource/roboto/300.css";
import Button from "react-bootstrap/Button";
import Contaier from "react-bootstrap/Container";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Main from "./pages/Main";
import Splash, { MainLoader } from "./pages/splash";
import Login, { loginAction } from "./pages/Login";
import Signup, { signupAction } from "./pages/Signup";
import Error from "./pages/Error";
import Bucket, { bucketAction, bucketLoader } from "./pages/Bucket";

//router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Splash />,
        loader: MainLoader,
      },
      {
        path: "login",
        element: <Login />,
        action: loginAction,
      },
      {
        path: "signup",
        element: <Signup />,
        action: signupAction,
      },
    ],
  },
  {
    path: "/bucket",
    element: <Bucket />,
    errorElement: <Error />,
    action: bucketAction,
    loader: bucketLoader,
  },
]);

//theme
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <RouterProvider router={router} />
      <ToastContainer />
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
