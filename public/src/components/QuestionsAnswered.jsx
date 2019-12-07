import React from "react";

class QuestionsAnswered extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div id="numOfQuestionsAnsweredS">
          <a>
            {this.props.currentProduct.productNumOfQuestionsAnswered} answered
            questions
          </a>
        </div>
      </div>
    );
  }
}

export default QuestionsAnswered;
