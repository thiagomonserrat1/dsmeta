import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserCard from "./components/UserCard";
import Header from "./components/Header";
import {} from "react-router-dom";

const App = () => {
  return (
    <>
      <ToastContainer />
      <Header />
      <main>
        <section id="useer">
          <div className="konia-container">
            <UserCard />
          </div>
        </section>
      </main>
    </>
  );
};

export default App;
