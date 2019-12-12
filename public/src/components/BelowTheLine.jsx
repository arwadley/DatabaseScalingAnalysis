import React from "react";
import InStock from "./InStock.jsx";
import OrderByDates from "./OrderByDates.jsx";
import DescriptionInformation from "./DescriptionInformation.jsx";
import Report from "./Report.jsx";

const BelowTheLine = props => {
  return (
    <div>
      <InStock inStock={props.inStock} />
      <div id="shipsFromS">
        Ships from and sold by {props.currentProduct.productCategory}
      </div>
      <OrderByDates
        inStock={props.inStock}
        wantItDate={props.wantItDate}
        orderByDateHours={props.orderByDateHours}
        orderByDateMinutes={props.orderByDateMinutes}
        orderByDateSeconds={props.orderByDateSeconds}
      />
      <DescriptionInformation
        currentProduct={props.currentProduct}
        descriptionCleaner={props.descriptionCleaner}
      />
      <span id="reportButtonContainerS">
        <Report
          reportModal={props.reportModal}
          reportModalOpen={props.reportModalOpen}
        />
      </span>
    </div>
  );
};

export default BelowTheLine;
