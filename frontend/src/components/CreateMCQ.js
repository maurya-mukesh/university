import "./style/MCQ.css";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postMcqAction, getMcqAction } from "../Redux/action/instructorAction";

const CreateMCQ = () => {
  const [ques, setQues] = useState({ ques: "" });
  const [option, setOption] = useState({});
  const [answer, setAnswer] = useState({});

  const dispatch = useDispatch();

  const handleAnswer = (e) => {
    e.preventDefault();
    e.persist();
    const value = e.target.type === "checkbox" ? e.target.name : e.target.value;
    setAnswer({ ...answer, [e.target.name]: value });
  };
  const handleOptions = (e) => {
    e.preventDefault();
    e.persist();
    setOption((option) => ({ ...option, [e.target.name]: e.target.value }));
  };
  const MCQ = {
    ques: ques,
    options: option,
    correctAnswer: answer,
  };
  const handleSubmitMCQ = (e) => {
    e.preventDefault();
    console.log("=>", MCQ);
    dispatch(postMcqAction(MCQ));
    dispatch(getMcqAction());
  };
  // handleOnClick
  return (
    <form onSubmit={handleSubmitMCQ} method="POST">
      <div class="modal-body mx-5" id="IDModel">
        <div className="CreateMCQ">
          <div className="question ml-sm-5 pl-sm-5 pt-2">
            <div className="py-2 h5">
              <b>Q. :</b>{" "}
              <div class="form-floating mt-2">
                <textarea
                  onChange={(e) => setQues(e.target.value)}
                  name="ques"
                  class="form-control"
                  placeholder="Leave a Question here"
                  id="floatingTextarea2"
                  cols="50"
                  value={ques.ques}
                  style={{ height: "100px" }}
                  required
                ></textarea>
                <label for="floatingTextarea2">Question </label>
              </div>
            </div>
            {/* Options ====================================== */}
            <div
              className="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3 d-flex flex-column"
              id="options"
            >
              Options
              <div class="input-group flex-nowrap mb-1">
                <span class="input-group-text" id="addon-wrapping">
                  A
                </span>
                <input
                  onChange={handleOptions}
                  name="A"
                  value={option.A}
                  type="text"
                  class="form-control"
                  placeholder="option"
                  aria-label="option"
                  aria-describedby="addon-wrapping"
                  required
                />
              </div>
              <div class="input-group flex-nowrap mb-1">
                <span class="input-group-text" id="addon-wrapping">
                  B
                </span>
                <input
                  onChange={handleOptions}
                  name="B"
                  value={option.B}
                  type="text"
                  class="form-control"
                  placeholder="option"
                  aria-label="option"
                  aria-describedby="addon-wrapping"
                  required
                />
              </div>
              <div class="input-group flex-nowrap mb-1">
                <span class="input-group-text" id="addon-wrapping">
                  C
                </span>
                <input
                  onChange={handleOptions}
                  name="C"
                  value={option.C}
                  type="text"
                  class="form-control"
                  placeholder="option"
                  aria-label="option"
                  aria-describedby="addon-wrapping"
                />
              </div>
              <div class="input-group flex-nowrap">
                <span class="input-group-text" id="addon-wrapping">
                  D
                </span>
                <input
                  onChange={handleOptions}
                  name="D"
                  value={option.D}
                  type="text"
                  class="form-control"
                  placeholder="option"
                  aria-label="option"
                  aria-describedby="addon-wrapping"
                />
              </div>
            </div>

            {/* Correct Answer =================== */}
            <h6>Select Correct Options</h6>
            <div className="correctAnswer border-2 m-1">
              <div class="form-check form-check-inline">
                <input
                  onChange={handleAnswer}
                  name="A"
                  class="form-check-input"
                  type="checkbox"
                  id="inlineCheckbox1"
                  value={answer.A}
                />
                <label class="form-check-label" for="inlineCheckbox1">
                  A
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  onChange={handleAnswer}
                  name="B"
                  class="form-check-input"
                  type="checkbox"
                  value={answer.B}
                />
                <label class="form-check-label" for="inlineCheckbox2">
                  B
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  onChange={handleAnswer}
                  name="C"
                  class="form-check-input"
                  type="checkbox"
                  value={answer.C}
                />
                <label class="form-check-label" for="inlineCheckbox3">
                  C{" "}
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  onChange={handleAnswer}
                  name="D"
                  class="form-check-input"
                  type="checkbox"
                  value={answer.D}
                />
                <label class="form-check-label" for="inlineCheckbox3">
                  D{" "}
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button
          type="submit"
          name="Submit Attendance"
          class="btn btn-warning leftButton"
          id="mcqButton"
          // data-dismiss="modal"
          // onClick={handleOnClick}
        >
          Create MCQ
        </button>
      </div>
    </form>
  );
};

export default CreateMCQ;
