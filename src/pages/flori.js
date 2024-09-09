import React from "react";
import Navbar from "../components/navbar/Navbar";
import Content from "../components/home/Content";
import Footer from "../components/home/Footer";
import { inst1, inst2, inst3, inst4, inst5, inst6 } from "../images/";
export default function Flori() {
  const p1 =
    " Îți prezentăm cele mai frumoase flori sălbatice din România și din lume, împreună cu locurile unde le poți vedea în toată splendoarea lor. ";
  const p2 =
    "acă florile sunt pasiunea ta, atunci Florio este locul perfect pentru tine! Indiferent dacă ești un grădinar experimentat, un designer floral sau pur și simplu un admirator al naturii, îți oferim inspirația și informațiile de care ai nevoie pentru a aduce frumusețea florilor în viața ta de zi cu zi.";
  const p3 =
    "Ești binevenit să te alături comunității noastre de iubitori de flori! Împărtășește cu noi experiențele tale, aranjamentele tale preferate sau grădina ta înflorită.";
  const title = "Evenimente în România: Magia Florilor ";

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
