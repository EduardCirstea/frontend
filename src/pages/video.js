import React from "react";
import Navbar from "../components/navbar/Navbar";
import { Content, Footer } from "../components/home";

export default function Video() {
  const p1 =
    "Ne place sa ne mandrim cu ceea ce facem, de aceea gasim video-urile un excelent mod de a arata acest fapt";
  const p2 =
    "Fă cunoștință cu cultura locală prin videoclipuri care surprind tradițiile, festivalurile și viața cotidiană din diferite colțuri ale lumii. Vei descoperi locuri de mâncat autentice, artizanat local și obiceiuri interesante.";
  const p3 =
    "acă ești în căutarea unor idei pentru următoarea ta vacanță, videoclipurile noastre sunt aici pentru a te inspira.";
  const p4 = "Vizioneaza video-uri facute cu drona sau cu camera";
  const title = "Pe drumuri straine: Videoclip-uri din diferite locatii";
  return (
    <div>
      <Navbar />
      <Content title={title} p1={p1} p2={p2} p3={p3} p4={p4} />
      <div className="row">
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
      <Footer />
    </div>
  );
}
