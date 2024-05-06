import AppRoutes from "./routes/app.routes"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
import { WindowSizeProvider } from "./context/WindowsSizeProvider";

const App = () => {
  return (
    <WindowSizeProvider>
      <AppRoutes />
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </WindowSizeProvider>
  )
}

export default App
