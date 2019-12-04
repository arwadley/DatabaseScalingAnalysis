import React from "react";

class QuestionsAnswered extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <span>
          <span id="theLineS">
            <span>|</span>
          </span>
          <a>
            {this.props.currentProduct.productNumOfQuestionsAnswered} answered
            questions
          </a>
        </span>
      </div>
    );
  }
}

export default QuestionsAnswered;
