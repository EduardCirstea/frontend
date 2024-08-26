import React from "react";
import "./style/home.scss";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/navbar/Navbar";
import { HeroBanner, Content, Blogs, Footer, Videos } from "../components/home";

export default function Home() {
  const { user } = useSelector((state) => state.user);

  const title = `Hoinărind prin România Cele mai frumoase peisaje din România, trasee
            și călătorii în locuri sălbatice, filmări cu drona`;
  const p1 = `Aici găsiți câteva dintre cele mai interesante trasee montane,
            recomandări de trasee turistice, cele mai frumoase peisaje din
            România și detalii din diverse locuri vizitate de noi in România.`;
  const p2 = ` Cei care nu ați ajuns incă poate veți fi tentați să ajungeți in
            aceste locuri sau vă puteți folosi ideile de trasee montane din
            România. <br />
            Dacă vreți, vă aștept să veniți alături de mine și de alți iubitori
            de natură și călătorii sau dacă pot să vă ajut in alte proiecte
            puteți să imi scrieți .`;
  const p3 = `Astept mesajele voastre și nu uitați pentru noutăți: Like/ Follow pe
            pagina facebook , instagram sau YouTube.`;
  const p4 = `Blog de fotografie și călătorii Hoinărind prin România.`;
  return (
    <div>
      <Navbar />
      <HeroBanner />
      <Content title={title} p4={p4} p1={p1} p2={p2} p3={p3} />
      <Blogs />
      <Videos />
      <Footer />
    </div>
  );
}
