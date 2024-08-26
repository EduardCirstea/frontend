import { Link } from "react-router-dom";

export default function Blog({ b }) {
  return (
    <div className="col-3">
      <Link to={`/blog/${b.id}`}>
        <img src={b.image} alt="dddd" />
      </Link>
      <Link to={`/blog/${b.id}`}>
        <h3>{b.title}</h3>
      </Link>

      <div>
        {b.locatii.map((l, i) => (
          <h4 key={i}>{l}, </h4>
        ))}
      </div>
      <p>{b.body}</p>
      <h5>
        {b.data} / {b.comentarii} Comentarii
      </h5>
    </div>
  );
}
