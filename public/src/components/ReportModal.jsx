import React from "react";

const ReportModal = props => {
  return (
    <div id="reportModalContainerS">
      <div id="innerReportModalContainerS">
        <div id="topBarOfReportModalS">
          <h3 id="reportIssueS">Report an issue</h3>
          <h4 id="reportBoxXS" onClick={props.closeReportModal}>
            x
          </h4>
        </div>
        <div id="centerReportModalS">
          <div id="tellUsIssueReportS">Please tell us about the issue.</div>
          <div id="dropDownReportModalS">
            <div id="whichPartReportS">Which part of the page?</div>
            <div className="downArrowS"></div>
          </div>
          <div id="dropDownIssueReportModalS">
            <div id="issueReportS">What's the issue?</div>
            <div className="downArrowS"></div>
          </div>
          <div id="commentsReportModalS">Comments (optional)</div>
          <textarea id="reportCommentFieldS" type="text"></textarea>
          <div id="bottomReportModalS">
            <div id="thatIFromReportS">i</div>
            <div id="reportDisclaimerS">
              Please don't enter person info. For questions about an order, go
              to <a>Your Account</a>.
            </div>
            <input
              type="button"
              id="submitReportButtonS"
              value="Submit"
              onClick={props.submitReport}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ReportModal;
