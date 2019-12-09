import React from "react";
import ProductMaker from "./ProductMaker.jsx";
import Stars from "./Stars.jsx";
import Ratings from "./Ratings.jsx";
import QuestionsAnswered from "./QuestionsAnswered.jsx";
import InStock from "./InStock.jsx";
import Report from "./Report.jsx";
import FlagAndDeals from "./FlagAndDeals.jsx";
import moment from "moment";

class Description extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inStock: null,
      wantItDate: null,
      orderByDateHours: null,
      orderByDateMinutes: null
    };
    this.descriptionCleaner = this.descriptionCleaner.bind(this);
    this.goToProductMaker = this.goToProductMaker.bind(this);
    this.dateMaker = this.dateMaker.bind(this);
    this.orderByDate = this.orderByDate.bind(this);
    this.hourDateCleaner = this.hourDateCleaner.bind(this);
    this.minuteDateCleaner = this.minuteDateCleaner.bind(this);
    this.availableOrNot = this.availableOrNot.bind(this);
  }

  descriptionCleaner(desc) {
    let cleanedDesc = "";
    let cleanLines = [];
    let curChar = 0;
    for (let i = 0; i < desc.length; i++) {
      if (desc[i] === "+" && desc[i + 1] === "+") {
        cleanedDesc = desc.slice(curChar, i) + "\n";
        cleanLines.push(cleanedDesc);
        cleanedDesc = "";
        curChar = i + 2;
      }
      if (i === desc.length - 1) {
        cleanedDesc = desc.slice(curChar, i + 1);
        cleanLines.push(cleanedDesc);
      }
    }
    return cleanLines;
  }

  goToProductMaker() {
    alert(
      `This would have redirected you to all of ${this.props.currentProduct.productMaker}'s products`
    );
  }

  dateMaker() {
    let date = moment()
      .add(4, "days")
      .format("dddd, MMM Do");
    this.setState({
      wantItDate: date
    });
  }

  orderByDate() {
    this.setState({
      orderByDateHours: this.hourDateCleaner(
        moment()
          .endOf("day")
          .fromNow()
      ),
      orderByDateMinutes: this.minuteDateCleaner(
        moment()
          .endOf("hour")
          .fromNow()
      )
    });

    setInterval(
      () =>
        this.setState({
          orderByDateHours: this.hourDateCleaner(
            moment()
              .endOf("day")
              .fromNow()
          ),
          orderByDateMinutes: this.minuteDateCleaner(
            moment()
              .endOf("hour")
              .fromNow()
          )
        }),
      1000
    );
  }

  hourDateCleaner(hours) {
    let cleanHours = hours.slice(3);
    return cleanHours;
  }

  minuteDateCleaner(minutes) {
    let cleanMinutes = minutes.slice(3);
    return `and ${cleanMinutes}`;
  }

  availableOrNot() {
    let stock = [true, true, true, true, true, true, false];
    let picker = stock[~~(Math.random() * stock.length)];
    this.setState({
      inStock: picker
    });
  }
  componentDidMount() {
    this.dateMaker();
    this.orderByDate();
    this.availableOrNot();
  }

  render() {
    return (
      <div id="productDescriptionContainerS">
        <div id="titleOfProductContainerS">
          <div id="titleOfProductS">
            {this.props.currentProduct.productName}
          </div>
        </div>
        <div id="productMakerContainerS">
          <ProductMaker
            currentProduct={this.props.currentProduct}
            goToProductMaker={this.goToProductMaker}
          />
        </div>
        <span id="starsRatingsQuestionsContainerS">
          <Stars currentProduct={this.props.currentProduct} />
          <Ratings currentProduct={this.props.currentProduct} />
          <span id="theLineS">|</span>
          <QuestionsAnswered currentProduct={this.props.currentProduct} />
        </span>
        <span id="productPriceContainerS">
          <span id="theWordPriceS">Price: </span>
          <span id="productPriceS">
            ${this.props.currentProduct.productPrice}
          </span>
        </span>
        <div id="shippingInfoUnderPriceS">
          <div>
            {this.props.currentProduct.productCategory} orders are delivered for
            $5.99 and do not qualify for FREE Delivery. <a>Learn more</a>
          </div>
        </div>
        <FlagAndDeals currentProduct={this.props.currentProduct} />
        <div id="grayLineDividerS"></div>
        <InStock inStock={this.state.inStock} />
        <div id="shipsFromS">
          Ships from and sold by {this.props.currentProduct.productCategory}
        </div>
        <div id="wantItByS">
          <div id="giveDateS">Want it by {this.state.wantItDate}?</div>
          {this.state.inStock ? (
            <div id="orderByS">
              <div>
                Order within the next{" "}
                <span id="countdownTimerS">
                  {this.state.orderByDateHours} {this.state.orderByDateMinutes}
                </span>
                .
              </div>
            </div>
          ) : (
            <div id="orderByS">Too bad, we're out.</div>
          )}
        </div>
        <div id="productDescriptionLineContainerS">
          <ul>
            {this.descriptionCleaner(this.props.currentProduct.productDesc).map(
              (line, id) => (
                <li key={id} className="productDescriptionLineS">
                  {line}
                </li>
              )
            )}
          </ul>
        </div>
        <span id="reportButtonContainerS">
          <Report
            reportModal={this.props.reportModal}
            reportModalOpen={this.props.reportModalOpen}
          />
        </span>
      </div>
    );
  }
}

export default Description;
