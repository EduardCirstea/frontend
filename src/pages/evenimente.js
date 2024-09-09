import React from "react";
import Navbar from "../components/navbar/Navbar";
import Content from "../components/home/Content";
import Footer from "../components/home/Footer";
import { inst1, inst2, inst3, inst4, inst5, inst6 } from "../images/";
export default function Evenimente() {
  const p1 =
    "Dacă nu ai participat încă la aceste evenimente, te invităm să arunci o privire! Poate vei descoperi experiențe care să te inspire să ieși din cotidian și să te bucuri de România într-un mod diferit. Evenimentele noastre sunt gândite să aducă oamenii împreună, să creeze amintiri și să ofere clipe de neuitat.";
  const p2 =
    "Dacă și tu ești un pasionat de evenimente și călătorii, te invităm să te alături nouă. Fii parte din comunitatea noastră și descoperă alături de alți entuziaști cele mai bune evenimente din România. Împreună putem face schimb de idei, recomandări și experiențe unice.";
  const p3 = "Fii la curent cu toate noutățile!";
  const p = " ";
  const title = "Evenimente în România: Descoperă Experiențe Memorabile ";

  return (
    <div>
      <Navbar />
      <Content title={title} p1={p1} p2={p2} p3={p3} p4={p} />
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
