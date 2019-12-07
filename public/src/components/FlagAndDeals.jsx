import React from "react";
import DealDropdown from "./DealDropdown.jsx";

class FlagAndDeals extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flagToShow: null,
      showDeals: false
    };
    this.dealGetter = this.dealGetter.bind(this);
    this.dealPopDown = this.dealPopDown.bind(this);
    this.dealGoBack = this.dealGoBack.bind(this);
  }

  dealGetter() {
    let deals = [true, false];
    let flagChooser = deals[~~(Math.random() * deals.length)];
    this.setState({
      flagToShow: flagChooser
    });
  }

  dealPopDown() {
    this.setState({
      showDeals: true
    });
  }

  dealGoBack() {
    this.setState({
      showDeals: false
    });
  }

  componentDidMount() {
    this.dealGetter();
  }

  render() {
    return (
      <div id="flagAndDealsContainerS">
        <span id="textFlagDealContainerS">
          <span id="theFlagS">
            {this.state.flagToShow ? (
              <span id="flagHolderS">
                <span id="orangeFlagS">Extra Savings</span>
                <span id="dealContainerS">
                  <span id="dealsDropdownS">
                    <a
                      onMouseEnter={this.dealPopDown}
                      onMouseLeave={this.dealGoBack}
                    >
                      Buy 5, save 5%. 1 Applicable Promotion(s)
                    </a>
                  </span>
                  {this.state.showDeals ? (
                    <div id="dealDropdownOuterContainerS">
                      <DealDropdown />
                    </div>
                  ) : null}
                </span>
              </span>
            ) : (
              <span id="flagHolderS">
                <span id="blackFlagS">
                  Gammazon's <span id="theWordChoiceS">Choice</span>
                </span>
                <span id="theTriangleS"></span>{" "}
                <span id="textAfterBlackFlagS">
                  in <a>[category]</a>
                </span>
              </span>
            )}
          </span>
        </span>
      </div>
    );
  }
}

export default FlagAndDeals;
