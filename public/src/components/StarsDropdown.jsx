import React from "react";
import Rating from "@material-ui/lab/Rating";

const StarsDropDown = props => (
  <div>
    {props.dropDownDisplayed ? (
      <div id="starDropDownContainerS" onMouseLeave={props.hoverGoBack}>
        <div id="innerStarDropdownContainerS">
          <div id="starsInsideDropdownS">
            <Rating
              name="numOfStarsS"
              value={props.star1 ? 1 : 0}
              readOnly={true}
              precision={1}
              max={1}
              size="small"
            />
            <Rating
              name="numOfStarsS"
              value={props.star2 ? 1 : 0}
              readOnly={true}
              precision={1}
              max={1}
              size="small"
            />
            <Rating
              name="numOfStarsS"
              value={props.star3 ? 1 : 0}
              readOnly={true}
              precision={1}
              max={1}
              size="small"
            />
            <Rating
              name="numOfStarsS"
              value={props.star4 ? 1 : 0}
              readOnly={true}
              precision={1}
              max={1}
              size="small"
            />
            <Rating
              name="numOfStarsS"
              value={props.star5 ? 1 : 0}
              readOnly={true}
              precision={1}
              max={1}
              size="small"
            />
            <div id="ratingInsideDropdownS">
              {~~(Math.round(props.currentProductRating * 100) / 100)} out of 5
            </div>
          </div>
        </div>
        <div id="numOfRatingsInDropdownS">
          <div>{props.currentProduct.productNumOfRatings} customer ratings</div>
        </div>
        <div>
          <div id="ratingBarContainerS">
            <div className="outerRatingBarContainerS">
              <a className="numericalRatingS">5 star</a>
              <div className="testRatingBarContainerS">
                <div
                  id="ratingBar5S"
                  className="testRatingBarsS"
                  style={{ width: `${props.bar5}%` }}
                ></div>
              </div>
              <a className="percentageRatingS">{`${~~(
                Math.round(props.bar5 * 100) / 100
              )}%`}</a>
            </div>

            <div className="outerRatingBarContainerS">
              <a className="numericalRatingS">4 star</a>
              <div className="testRatingBarContainerS">
                <div
                  id="ratingBar4S"
                  className="testRatingBarsS"
                  style={{ width: `${props.bar4}%` }}
                ></div>
              </div>
              <a className="percentageRatingS">{`${~~(
                Math.round(props.bar4 * 100) / 100
              )}%`}</a>
            </div>
            <div className="outerRatingBarContainerS">
              <a className="numericalRatingS">3 star</a>
              <div className="testRatingBarContainerS">
                <div
                  id="ratingBar3S"
                  className="testRatingBarsS"
                  style={{ width: `${props.bar3}%` }}
                ></div>
              </div>
              <a className="percentageRatingS">{`${~~(
                Math.round(props.bar3 * 100) / 100
              )}%`}</a>
            </div>
            <div className="outerRatingBarContainerS">
              <a className="numericalRatingS">2 star</a>
              <div className="testRatingBarContainerS">
                <div
                  id="ratingBar2S"
                  className="testRatingBarsS"
                  style={{ width: `${props.bar2}%` }}
                ></div>
              </div>
              <a className="percentageRatingS">{`${~~(
                Math.round(props.bar2 * 100) / 100
              )}%`}</a>
            </div>
            <div className="outerRatingBarContainerS">
              <a className="numericalRatingS">1 star</a>
              <div className="testRatingBarContainerS">
                <div
                  id="ratingBar1S"
                  className="testRatingBarsS"
                  style={{ width: `${props.bar1}%` }}
                ></div>
              </div>
              <a className="percentageRatingS">{`${~~(
                Math.round(props.bar1 * 100) / 100
              )}%`}</a>
            </div>
          </div>
        </div>
        <div id="grayLineDivider2S"></div>
        <div id="seeCustomerReviewsS">
          <a
            id="seeAllLinkS"
            onClick={() => {
              window.scrollTo(0, 1200);
            }}
          >
            See all customer reviews
          </a>
        </div>
      </div>
    ) : null}
  </div>
);

export default StarsDropDown;
