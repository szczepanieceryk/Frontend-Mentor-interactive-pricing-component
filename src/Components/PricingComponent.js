import Form from "react-bootstrap/Form";
import "../styles/_pricingComponent.scss";

const PricingComponent = ({
  views,
  price,
  sliderIndex,
  handleSliderChange,
  handleCheckInputChange,
  handleFormSubmit,
}) => {
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
        <button onClick={handleFormSubmit} type="submit" className="btn-submit">
          Start my trial
        </button>
      </div>
    </Form>
  );
};

export default PricingComponent;
