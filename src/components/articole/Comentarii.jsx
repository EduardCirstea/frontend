import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import img from "../../images/fb.png";
import { addComments, getComments } from "../../features/commentSlice";

export default function Comentarii() {
  const { user } = useSelector((state) => state.user);
  const { comments } = useSelector((state) => state.comment);
  const { token } = user;
  const [text, setText] = useState("");
  const params = useParams();
  const { articleId } = params;
  const count = comments?.length || 0;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getComments(articleId));
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    const values = {
      token,
      text: text,
      articleId: articleId,
    };
    let res = await dispatch(addComments(values));
  };
  return (
    <div className="comentarii">
      <div className="div">
        <div className="count">{count}</div>
      </div>
      {comments.map((c, i) => (
        <div key={i} className={`comments ${c._id}`}>
          <img src={c.user.picture} alt="" />
          <div>
            <div>
              <h3>{c.user.name}</h3>
              <a href={c._id}>
                {c.text.substring(0, 10)} la {c.createdAt}
              </a>
            </div>
            <p>{c.text}</p>
          </div>
        </div>
      ))}
      <h2>Lasa un raspuns</h2>
      <p>
        Want to join the discussion? <br /> Feel free to contribute!
      </p>
      <form onSubmit={onSubmit}>
        <div className="group">
          <img src={user.picture} alt="" />
          <h3>{user.name}</h3>
        </div>

        <textarea
          type="text"
          id="comentariu"
          name="comentariu"
          required
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <button className="btn-com" type="submit">
          Publica comentariul
        </button>
      </form>
    </div>
  );
}
