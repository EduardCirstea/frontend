import React from "react";

export default function Videos() {
  return (
    <>
      <div className="center-text">
        <h2>Video-uri drone</h2>
      </div>
      <div className="row" style={{ marginBottom: "100px" }}>
        <div className="cols-2">
          <iframe
            src="https://www.youtube.com/embed/wGJAXI_j76E"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <p>Zbor peste munții Cozia în culorile toamnei.</p>
        </div>
        <div className="cols-2">
          <iframe
            src="https://www.youtube.com/embed/Jg2l518S9To"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <p>Traseu de iarnă pe Vf. Leaota (2133m).</p>
        </div>
      </div>
    </>
  );
}
