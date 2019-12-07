import React from "react";

const LearnMoreModal = props => {
  return (
    <div id="innerLearnMoreModalContainerS">
      <div id="topBarLearnMoreS">
        <div id="learnMoreHowS">Here's how</div>
        <div id="learnMoreXS" onClick={props.closeLearnMoreModal}>
          x
        </div>
      </div>
      <div id="innerLearnMoreS">
        <h1 id="promoDetailsLearnMoreS">Promotion Details</h1>
        <div>
          <ul>
            <li>This is a limited time offer.</li>
            <li>
              Offer only applies to products sold by Gammazon.com or Gammazon
              Digital Services LLC (look for "sold by Gammazon.com" or "sold by
              Gammazon Digital Services LLC" on the product detail page).
              Products sold by third-party sellers or other Gammazon entities
              will not qualify for this offer, even if "fulfilled by
              Gammazon.com" or "Prime Eligible".
            </li>
            <li>Offer does not apply to digital content.</li>
            <li>Offer good while supplies last.</li>
            <li>
              Shipping charges and taxes may apply to the full value of
              discounted and free promotional items.
            </li>
            <li>
              Items must be purchased in a single order and shipped at the same
              speed to a single address.
            </li>
            <li>Offer limited to one per customer and account.</li>
            <li>
              Taxes, shipping and handling, and gift wrap charges do not apply
              when determining minimum purchase amount.
            </li>
            <li>
              The maximum benefit you may receive from this offer is 15% off
              your order.
            </li>
            <li>
              Gammazon reserves the right to modify or cancel the offer at any
              time.
            </li>
            <li>Offer is non-transferable and may not be resold.</li>
            <li>
              Offer discount will be allocated proportionally among all
              promotional items in your order.
            </li>
            <li>
              If any of the products or content related to this offer are
              returned, your refund will equal the amount you paid for the
              product or content, subject to applicable refund policies.
            </li>
            <li>
              If you violate any of these terms, the offer will be invalid.
            </li>
            <li>
              Unless an Gammazon Gift Card is the stated benefit of the
              promotion, promotional codes (including those placed directly in
              accounts) may not be redeemed for Gammazon Gift Cards.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LearnMoreModal;
