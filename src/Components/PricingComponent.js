import Form from "react-bootstrap/Form";
import "../styles/_pricingComponent.scss";

const PricingComponent = ({
  views,
  pageViews,
  setViews,
  price,
  setPrice,
  pricing,
  discountPricing,
  isYearsubScription,
  setIsYearSubscription,
  sliderIndex,
  setSliderIndex,
}) => {
  // display appropriate pricing & page view values based on slider position
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

  return (
    <Form className="pricing-component">
      <span className="page-views-mobile-display">
        {views === "1" ? views + "M" : views + "K"} pageviews
      </span>
      <div className="page-views-desktop-display">
        <Form.Label className="page-views">
          {views === "1" ? views + "M" : views + "K"} pageviews
        </Form.Label>
        <span className="pricing-disaply">
          <span className="pricing-value"> $ {price}.00 </span>/ month
        </span>
      </div>
      <Form.Range
        className="range-slider-input"
        min={0}
        max={100}
        value={sliderIndex * 25}
        step={25}
        onChange={handleSliderChange}
      />
      <span className="pricing-mobile-disaply">
        <span className="pricing-value"> $ {price}.00 </span>/ month
      </span>
      <div className="time-billing">
        <span className="billing-label">Monthly Billing</span>
        <Form.Check
          type="switch"
          id="custom-switch"
          label=""
          className="form-check"
          onChange={handleCheckInputChange}
        />
        <span className="billing-label billing-label-yearly">
          Yearly Billing
        </span>
      </div>
      <div className="spacer-line"></div>
      <div className="bottom-part">
        <div className="static-info">
          <span className="static-info-el">Unlimited websites</span>
          <span className="static-info-el">100% data ownership</span>
          <span className="static-info-el">Email reports</span>
        </div>
        <button type="submit" className="btn-submit">
          Start my trial
        </button>
      </div>
    </Form>
  );
};

export default PricingComponent;
