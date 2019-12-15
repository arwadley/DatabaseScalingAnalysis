import React from "react";

const QuestionsAnswered = props => (
  <div>
    <div id="numOfQuestionsAnsweredS">
      <a>
        {props.currentProduct.productNumOfQuestionsAnswered} answered questions
      </a>
    </div>
  </div>
);

export default QuestionsAnswered;
