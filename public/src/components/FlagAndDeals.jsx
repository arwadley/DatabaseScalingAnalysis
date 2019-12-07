import React from "react";
import DealDropdown from "./DealDropdown.jsx";
import LearnMoreModal from "./LearnMoreModal.jsx";

class FlagAndDeals extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flagToShow: null,
      showDeals: false,
      learnMoreModalOpen: false
    };
    this.dealGetter = this.dealGetter.bind(this);
    this.dealPopDown = this.dealPopDown.bind(this);
    this.dealGoBack = this.dealGoBack.bind(this);
    this.dealGoBackQuicker = this.dealGoBackQuicker.bind(this);
    this.openLearnMoreModal = this.openLearnMoreModal.bind(this);
    this.closeLearnMoreModal = this.closeLearnMoreModal.bind(this);
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
    setTimeout(
      () =>
        this.setState({
          showDeals: false
        }),
      800
    );
  }

  dealGoBackQuicker() {
    this.setState({
      showDeals: false
    });
  }

  openLearnMoreModal() {
    this.dealGoBackQuicker();
    this.setState({
      learnMoreModalOpen: true
    });
  }

  closeLearnMoreModal() {
    this.setState({
      learnMoreModalOpen: false
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
                    <a onMouseEnter={this.dealPopDown}>
                      Buy 5, save 5%. 1 Applicable Promotion(s)
                    </a>
                  </span>
                  {this.state.showDeals ? (
                    <div
                      id="dealDropdownOuterContainerS"
                      onMouseLeave={this.dealGoBack}
                    >
                      <DealDropdown
                        currentProduct={this.props.currentProduct}
                        openLearnMoreModal={this.openLearnMoreModal}
                      />
                    </div>
                  ) : null}
                  {this.state.learnMoreModalOpen ? (
                    <div id="outerLearnMoreModalContainerS">
                      <LearnMoreModal
                        closeLearnMoreModal={this.closeLearnMoreModal}
                      />
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
                  in <a>{this.props.currentProduct.productCategory}</a>
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
