import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Route, Routes } from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import HowItWorks from "./pages/HowItWorks";
import Menu from "./pages/Menu";
import Error from "./pages/Error";
import SingleCook from "./pages/SingleCook";
import { Provider } from "./context/pageContext";
import { Cooks } from "./pages/Cooks";

function App() {
  return (
    <div className="bg-beige font-Roboto">
      <BrowserRouter>
        <Header />
        <Provider>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/howitworks" element={<HowItWorks />} />
            <Route path="/cooks" element={<Cooks />} />
            <Route path="/menu" element={<Menu />} />
            <Route
              path="/menu/:singleCook"
              element={<SingleCook items={[]} />}
            />
            <Route path="*" element={<Error />} />
          </Routes>
        </Provider>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
