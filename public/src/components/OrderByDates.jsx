import React from "react";

const OrderByDates = props => {
  return (
    <div id="wantItByS">
      <div id="giveDateS">Want it by {props.wantItDate}?</div>
      {props.inStock ? (
        <div id="orderByS">
          <div>
            Order within the next{" "}
            <span id="countdownTimerS">
              {props.orderByDateHours} {props.orderByDateMinutes}
            </span>
            .
          </div>
        </div>
      ) : (
        <div id="orderByS">Too bad, we're out.</div>
      )}
    </div>
  );
};

export default OrderByDates;
