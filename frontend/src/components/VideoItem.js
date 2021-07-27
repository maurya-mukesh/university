import React from "react";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";

const VideoItem = (props) => {
  // console.log(props)
  return (
    <div className="card p-0 m-2">
      <div className="card-body row d-flex aline-center py-2">
        <div className="video-icon col-sm-2 mt-4 mx-4 aline-center">
          <button
            className="btn btn-warning px-4"
            onClick={() => props.onPlay(props._id)}
          >
            <PlayCircleFilledIcon/>
          </button>
        </div>
        <div className="video-info col-sm-8">
          <h4>{props.videoTitle}</h4>
          <p>{props.videoSub_Title}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
