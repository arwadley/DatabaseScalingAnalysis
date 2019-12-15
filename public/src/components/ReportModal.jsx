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
            <div id="whichPartReportS">{props.topSelection}</div>
            <div className="downArrowS"></div>
            <div id="dropDownReportModalContentS">
              <div
                className="dropDownItemS"
                value="Ben's part"
                onClick={() => props.changeTopSelection("Ben's part")}
              >
                Ben's part
              </div>
              <div
                className="dropDownItemS"
                value="Kytra's part"
                onClick={() => props.changeTopSelection("Kytra's part")}
              >
                Kytra's part
              </div>
              <div
                className="dropDownItemS"
                value="Matt's part"
                onClick={() => props.changeTopSelection("Matt's part")}
              >
                Matt's part
              </div>
              <div
                className="dropDownItemS"
                value="Sam's part"
                onClick={() => props.changeTopSelection("Sam's part")}
              >
                Sam's part
              </div>
              <div
                className="dropDownItemS"
                value="Tim's part"
                onClick={() => props.changeTopSelection("Tim's part")}
              >
                Tim's part
              </div>
            </div>
          </div>
          <div id="dropDownIssueReportModalS">
            <div id="issueReportS">{props.bottomSelection}</div>
            <div className="downArrowS"></div>
            <div id="dropDownIssueReportModalContentS">
              <div
                className="dropDownItemS"
                value="It's too good"
                onClick={() => props.changeBottomSelection("It's too good")}
              >
                It's too good
              </div>
              <div
                className="dropDownItemS"
                value="It's perfect"
                onClick={() => props.changeBottomSelection("It's perfect")}
              >
                It's perfect
              </div>
              <div
                className="dropDownItemS"
                value="I thought this was actually Amazon"
                onClick={() =>
                  props.changeBottomSelection(
                    "I thought this was actually Amazon"
                  )
                }
              >
                I thought this was actually Amazon
              </div>
            </div>
          </div>
          <div id="commentsReportModalS">Comments (optional)</div>
          <textarea id="reportCommentFieldS" type="text"></textarea>
          <div id="bottomReportModalS">
            <div id="thatIFromReportS">i</div>
            <div id="reportDisclaimerS">
              Please don't enter personal info. For questions about an order, go
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
