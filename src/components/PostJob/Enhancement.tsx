import "./css/Enhancement.css";

export const Enhancement = () => {
  return (
    <div className="enhance-card">
      <h1>Enhance Your Listing. Get More Leads.</h1>
      <div className="enhance-option">
        <input type="checkbox" name="companyLogo" id="companyLogo" />
        <label htmlFor="companyLogo">
          Show your company logo in the listing (+$49)
        </label>
      </div>
      <div className="enhance-option">
        <input type="checkbox" name="companyColor" id="companyColor" />
        <input
          type="color"
          name="companyColorPick"
          id="companyColorPick"
        />{" "}
        <label htmlFor="companyColor">
          Highlight your listing in a custom color (+$49)
        </label>
      </div>
      <div className="enhance-option">
        <input type="checkbox" name="companySticky" id="companySticky" />
        <label htmlFor="companySticky">
          Sticky your listing to the top of the page for one month to maximize
          exposure (+$199)
        </label>
      </div>
    </div>
  );
};
