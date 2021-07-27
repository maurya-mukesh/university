import React from "react";
// import FileCopySharpIcon from '@material-ui/icons/FileCopySharp';

const AssignmentList = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <table className="table table-striped table-hover ">
      <thead className="border-2">
        <tr className="">
          <th>Assignment Name</th>
          <th>Submission Date</th>
          <th>Question Link</th>
          <th>Submission Link</th>
          <th>Status</th>
          <th>Feedback</th>
          <th>Marks</th>
        </tr>
      </thead>
      <tbody>
        {posts.map((post) => (
          <tr key={post.id}>
            <td>{post.title}</td>
            <td>May 30, 2021</td>
            <td>
              <p className="text-dark">Question</p>{" "}
              <a
                href="https://res.cloudinary.com/bookshelf/raw/upload/v1624175351/Kushal_s_Resume_3_-converted_yuzvkt.docx"
                download
              >
                <img
                  src="https://image.flaticon.com/icons/png/512/686/686562.png"
                  alt="Test1"
                  width="54"
                  height="42"
                />
              </a>
            </td>
            <td> Github</td>
            <td>
              <span class="label success">Pass</span>
            </td>
            <td> {post.title}</td>
            <td></td>
            <td>Front-End - 75.00%</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AssignmentList;
