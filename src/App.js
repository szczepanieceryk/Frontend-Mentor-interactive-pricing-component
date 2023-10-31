import PricingComponent from "./Components/PricingComponent";
import Footer from "./Layouts/Footer";
import Header from "./Layouts/Header";
import "./styles/App.css";
// - 10K pageviews / $8 per month
// - 50K pageviews / $12 per month
// - 100K pageviews / $16 per month
// - 500k pageviews / $24 per month
// - 1M pageviews / $36 per month

// If the visitor switches the toggle to yearly billing, a 25% discount should be applied to all prices.
const App = () => {
  return (
    <div className="container">
      <div className="app-wrapper">
        <Header />
        <PricingComponent />
        <Footer />
      </div>
    </div>
  );
};

export default App;
