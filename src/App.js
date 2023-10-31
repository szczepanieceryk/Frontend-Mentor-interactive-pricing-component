import PricingComponent from "./Components/PricingComponent";
import Header from "./Layouts/Header";
import "./styles/App.css";

const App = () => {
  return (
    <div className="container">
      <div className="app-wrapper">
        <Header />
        <PricingComponent />
        <div className="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge">
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a href="https://github.com/szczepanieceryk">Eryk Szczepaniec</a>.
        </div>
      </div>
    </div>
  );
};

export default App;
