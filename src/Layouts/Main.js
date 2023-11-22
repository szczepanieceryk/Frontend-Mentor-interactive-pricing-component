import { useState } from "react";

import PricingComponent from "../Components/PricingComponent";

const Main = () => {
  // data for appropraite pricing & page viewes display based on state values
  const pricing = [8, 12, 16, 24, 36];
  const discountPricing = pricing.map((price) => price * 0.75);
  const pageViews = ["10", "50", "100", "500", "1"];

  // set use state values
  const [views, setViews] = useState(pageViews[2]);
  const [price, setPrice] = useState(pricing[2]);
  const [isYearsubScription, setIsYearSubscription] = useState(false);
  const [sliderIndex, setSliderIndex] = useState(2);

  const handleSliderChange = (event) => {
    let value = parseInt(event.target.value, 10);
    let index = value / 25;

    if (index >= 0 && index < pricing.length) {
      setSliderIndex(index);
      setViews(pageViews[index]);
      setPrice(isYearsubScription ? discountPricing[index] : pricing[index]);
    }
  };

  const handleCheckInputChange = () => {
    // get the currend index (based on displayed paged views)
    const currentIndex = pageViews.indexOf(views);
    // assign to variables value & update toggled state
    const newIsYearSubscription = !isYearsubScription;

    setIsYearSubscription(newIsYearSubscription);

    // based on state value determine which pricing to use (standard / discounted)
    if (newIsYearSubscription) {
      setPrice(discountPricing[currentIndex]);
    } else {
      setPrice(pricing[currentIndex]);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <PricingComponent
        views={views}
        price={price}
        sliderIndex={sliderIndex}
        handleSliderChange={handleSliderChange}
        handleCheckInputChange={handleCheckInputChange}
        handleFormSubmit={handleFormSubmit}
      />
    </>
  );
};

export default Main;
