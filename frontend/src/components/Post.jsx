import React from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";
const baseURL = import.meta.env.VITE_BASE_URL;

const Post = ({_id, title, summary, cover, author, createdAt }) => {
  return (
    <>
      <div className="blog-card">
        <div className="meta">
          <div className="photo">
            <Link to="">
              <img src={`${baseURL}/${cover}`} alt="" />
            </Link>
          </div>
          <ul className="details">
            <li className="author">
              <Link to="#"> {author.username}</Link>
            </li>
            
            {/* <time> {format(new Date(createdAt), "dd MMMM yyyy HH:MM")} </time> */}
            <li className="date">{format(new Date(createdAt), "dd MMMM yyyy")}</li>

          </ul>
        </div>
        <div className="description">
          <Link>
            <h2>{title}</h2>
          </Link>
          {/* <h1>แปรขยะพลาสติกเป็นบล็อกปูพื้น</h1> */}
          <p style={{ overflow: "hidden" }}>{summary}</p>
          <p className="read-more">
          <Link to={`Postpage/${_id}`}>Read More</Link>
          </p>
        </div>
      </div>
    </>
  );
};
export default Post;
