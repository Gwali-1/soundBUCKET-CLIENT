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

//router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <p>error</p>,
  },
  {
    path: "/bucket",
    element: <h1>about</h1>,
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
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
