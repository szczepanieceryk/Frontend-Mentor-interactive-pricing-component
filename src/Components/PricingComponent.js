import Form from "react-bootstrap/Form";
const PricingComponent = () => {
  return (
    <Form className="pricing-component">
      <span className="page-views">100k pageviews</span>
      <Form.Range />
      <span className="pricing-disaply">
        <span className="pricing-value"> $ 16.00 </span>/ month
      </span>
      <div className="time-billing">
        <span>Monthly Billing</span>
        <span className="yearly-billing">Yearly Billing</span>
        <Form.Check type="switch" id="custom-switch" label="" />
      </div>
      <div className="spacer-line"></div>
      <div className="static-info">
        <span className="static-info-el">Unlimited websites</span>
        <span className="static-info-el">100% data ownership</span>
        <span className="static-info-el">Email reports</span>
      </div>
      <button type="submit" className="btn-submit">
        Start my trial
      </button>
    </Form>
  );
};

export default PricingComponent;
