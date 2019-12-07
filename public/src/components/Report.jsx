import React from "react";
import ReportModal from "./ReportModal.jsx";
class Report extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reportModalOpen: false,
      topSelection: "Which part of the page?",
      bottomSelection: "What's the issue?"
    };
    this.openReportModal = this.openReportModal.bind(this);
    this.closeReportModal = this.closeReportModal.bind(this);
    this.submitReport = this.submitReport.bind(this);
    this.changeTopSelection = this.changeTopSelection.bind(this);
    this.changeBottomSelection = this.changeBottomSelection.bind(this);
  }

  openReportModal() {
    this.setState({
      reportModalOpen: true
    });
  }

  closeReportModal() {
    this.setState({
      reportModalOpen: false
    });
  }

  changeTopSelection(event) {
    this.setState({
      topSelection: event
    });
  }

  changeBottomSelection(event) {
    this.setState({
      bottomSelection: event
    });
  }

  submitReport() {
    alert("Cool story BRO");
    this.closeReportModal();
  }

  render() {
    return (
      <span>
        <div id="talkBubbleS"></div>
        <span id="reportInfoS">
          <a onClick={this.openReportModal}>
            Report incorrect product information.
          </a>
        </span>
        {this.state.reportModalOpen ? (
          <div id="reportModalComponentS">
            <ReportModal
              closeReportModal={this.closeReportModal}
              submitReport={this.submitReport}
              changeTopSelection={this.changeTopSelection}
              topSelection={this.state.topSelection}
              changeBottomSelection={this.changeBottomSelection}
              bottomSelection={this.state.bottomSelection}
            />
          </div>
        ) : null}
      </span>
    );
  }
}

export default Report;
