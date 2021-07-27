import "./style/MCQ.css";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
// import mcqType from "../Redux/actionType/mcqType";
// import { getMcqAction } from "../Redux/action/instructorAction";

const MCQ = (props) => {
  const [data, setData] = useState({});

  const getMcqData = useSelector((state) => state.getMcqData);
  const { getMCQ } = getMcqData;

  console.log("GET DATA ===>>>", getMCQ);

  // localStorage.setItem("MCQ", getMCQ);
  useEffect(() => {
    localStorage.setItem("MCQ", JSON.stringify(getMCQ));
    const dataMCQ = localStorage.getItem("MCQ");
    setData(dataMCQ);
  }, [getMCQ]);

  console.log("MCQ data ===>>>", data);

  return (
    <div className="MCQ" hidden={false}>
      {/* <div className="text-warning">get 2 marks</div> */}
      {getMCQ?.mcq.map((item, idx) => {
        return (
          <div class="markMCQContainer mt-sm-5 my-1">
            <div class="question ml-sm-5 pl-sm-5 pt-2">
              <div class="py-2 h5">
                <b>{item.ques}</b>
              </div>
              <div class="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3" id="options">
                {" "}
                <label class="options">
                  {item.options[0].A} <input type="radio" name="radio" />{" "}
                  <span class="checkmark"></span>{" "}
                </label>{" "}
                <label class="options">
                  {item.options[0].B} <input type="radio" name="radio" />
                  <span class="checkmark"></span>{" "}
                </label>{" "}
                <label class="options">
                  {item.options[0].A} <input type="radio" name="radio" />
                  <span class="checkmark"></span>{" "}
                </label>{" "}
                <label class="options">
                  {item.options[0].D} <input type="radio" name="radio" />
                  <span class="checkmark"></span>{" "}
                </label>{" "}
              </div>
            </div>
            <div class="d-flex align-items-center pt-3">
              <div id="prev">
                {" "}
                <button type="submit" onClick={props.handleCreateMCQ} class="btn btn-warning">Submit</button>{" "}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MCQ;
