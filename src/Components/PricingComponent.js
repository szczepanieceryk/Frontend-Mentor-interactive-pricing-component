import Form from "react-bootstrap/Form";
import "../styles/PricingComponent.css";

const PricingComponent = () => {
  return (
    <Form className="pricing-component">
      <span className="page-views-mobile-display">100k pageviews</span>
      <div className="page-views-desktop-display">
        <span className="page-views">100k pageviews</span>
        <span className="pricing-disaply">
          <span className="pricing-value"> $ 16.00 </span>/ month
        </span>
      </div>
      <Form.Range className="range-slider-input" />
      <span className="pricing-mobile-disaply">
        <span className="pricing-value"> $ 16.00 </span>/ month
      </span>
      <div className="time-billing">
        <span className="billing-label">Monthly Billing</span>
        <Form.Check
          type="switch"
          id="custom-switch"
          label=""
          className="form-check"
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
