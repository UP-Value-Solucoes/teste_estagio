import { RouterMain } from "./router/routerMain";
import "./styles/index.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer />
        <RouterMain />
      {/* </ToastContainer> */}
    </>
  );
}

export default App;
