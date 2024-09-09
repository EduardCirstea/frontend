import React from "react";
import Navbar from "../components/navbar/Navbar";
import Content from "../components/home/Content";
import Footer from "../components/home/Footer";
import { inst1, inst2, inst3, inst4, inst5, inst6 } from "../images/";
export default function Peisaje() {
  const p1 =
    "Pe acest blog vei descoperi frumusețea și diversitatea florilor sălbatice și cultivate care împodobesc peisajele acestei țări minunate. Fie că ești un pasionat de botanică, un fotograf de natură sau pur și simplu un iubitor al frumuseții naturale, aici vei găsi o colecție de povești, imagini și recomandări despre cele mai impresionante flori din România.";
  const p2 =
    "acă ești în căutare de inspirație pentru grădina ta sau pur și simplu vrei să cunoști mai multe despre florile care îți înconjoară casa, vei găsi aici recomandări despre cele mai potrivite plante pentru diverse zone climatice din România.";
  const p3 =
    "Dacă vrei să afli mai multe despre florile prezentate pe blog, despre locurile unde le poți vedea sau despre cum să îți îngrijești propriile plante, scrie-ne!";
  const title = "Pe drumuri straine: O Lume a Culorilor și a Frumuseții";

  return (
    <div>
      <Navbar />
      <Content title={title} p1={p1} p2={p2} p3={p3} />
      <div className="photo-gallery">
        <img src={inst1} style={{ width: "200px" }} />
        <img src={inst1} style={{ width: "200px" }} />
        <img src={inst2} style={{ width: "200px" }} />
        <img src={inst3} style={{ width: "200px" }} />
        <img src={inst4} style={{ width: "200px" }} />
        <img src={inst5} style={{ width: "200px" }} />
        <img src={inst6} style={{ width: "200px" }} />
      </div>
      <Footer />
    </div>
  );
}
