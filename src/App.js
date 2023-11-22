// layout imports
import Header from "./Layouts/Header";
import Main from "./Layouts/Main";
import Footer from "./Layouts/Footer";
// style imports
import "./styles/style.css";

const App = () => {
  const headerTitle = "Simple, traffic-based pricing";
  const banner = "Sign-up for our 30-day trial. No credit card required.";
  return (
    <div className="container">
      <div className="app-wrapper">
        <Header title={headerTitle} banner={banner} />
        <Main />
        <Footer />
      </div>
    </div>
  );
};

export default App;
