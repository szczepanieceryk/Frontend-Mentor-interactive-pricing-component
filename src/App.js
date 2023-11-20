import { useState } from "react";
import PricingComponent from "./Components/PricingComponent";
import Footer from "./Layouts/Footer";
import Header from "./Layouts/Header";
import "./styles/style.css";
// - 10K pageviews / $8 per month
// - 50K pageviews / $12 per month
// - 100K pageviews / $16 per month
// - 500k pageviews / $24 per month
// - 1M pageviews / $36 per month

// If the visitor switches the toggle to yearly billing, a 25% discount should be applied to all prices.
const App = () => {
  const pricing = [8, 12, 16, 24, 36];
  const pageViews = ["10", "50", "100", "500", "1"];

  const [views, setViews] = useState(pageViews[2]);
  const [price, setPrice] = useState(pricing[2]);

  console.log("views ", views);
  console.log("price", pricing[views]);
  return (
    <div className="container">
      <div className="app-wrapper">
        <Header />
        <PricingComponent
          views={views}
          pageViews={pageViews}
          setViews={setViews}
          price={price}
          setPrice={setPrice}
          pricing={pricing}
        />
        <Footer />
      </div>
    </div>
  );
};

export default App;
