import { useState } from "react";
import PricingComponent from "./Components/PricingComponent";
import Footer from "./Layouts/Footer";
import Header from "./Layouts/Header";
import "./styles/style.css";

const App = () => {
  // data for appropraite pricing & page viewes display based on state values
  const pricing = [8, 12, 16, 24, 36];
  const discountPricing = pricing.map((price) => price * 0.75);
  const pageViews = ["10", "50", "100", "500", "1"];

  // set use state values
  const [views, setViews] = useState(pageViews[2]);
  const [price, setPrice] = useState(pricing[2]);
  const [isYearsubScription, setIsYearSubscription] = useState(false);
  const [sliderIndex, setSliderIndex] = useState(2); // Starting at index 2 as per your initial state

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
          discountPricing={discountPricing}
          isYearsubScription={isYearsubScription}
          setIsYearSubscription={setIsYearSubscription}
          sliderIndex={sliderIndex}
          setSliderIndex={setSliderIndex}
        />
        <Footer />
      </div>
    </div>
  );
};

export default App;
