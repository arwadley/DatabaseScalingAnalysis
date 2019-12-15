import React from "react";
import Hours from "./Hours.jsx";
import Minutes from "./Minutes.jsx";
import Seconds from "./Seconds.jsx";

const OrderByDates = props => {
  return (
    <div id="wantItByS">
      <div id="giveDateS">Want it by {props.wantItDate}?</div>
      {props.inStock ? (
        <div id="orderByS">
          <div>
            Order within the next{" "}
            <span id="countdownTimerS">
              <Hours /> <Minutes /> <Seconds />
            </span>
          </div>
        </div>
      ) : (
        <div id="orderByS">Too bad, we're out.</div>
      )}
    </div>
  );
};

export default OrderByDates;
