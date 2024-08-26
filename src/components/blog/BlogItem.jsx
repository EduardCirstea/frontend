import React from "react";
import { blog } from "../../blog.js";
import "./style/blog.scss";
import Navbar from "../navbar/Navbar.jsx";
export default function BlogItem() {
  const blog1 = blog[0];
  return (
    <div>
      <Navbar />
      <div className="containers">
        <div className="blog-item">
          <div className="left">
            <h1>{blog1.title}</h1>
            <p>{blog1.body}</p>
            <p>
              Traseu de o zi in Munții Iezer Păpușa, dificil prin lungimea de 35
              km si ascensiune total 2,576 m, timpul nostru 12 ore si 16 min, cu
              mers rapid si pauze foarte scurte, vreme capricioasă dar frumoasă.
            </p>
            <p>
              Parcare la Cabana Voina, bandă roșie: urcare la stâna Văcarea –
              Vf. Huluba – Vf. Văcarea (2068m) – Vf. Târâțoasa – Vf. Cățunu –
              Capul Cățunului – Vf. Iezerul Mare (2463m) – Vf. Roșu (2469m) -Vf.
              Pișcanu – Vf. Bătrâna (2341m) – Vf. Păpușa (2393m) – Refugiul/ Vf.
              Găinațul Mare – Cabana Voina.
            </p>
            <p>
              Lungime: 35 km. Diferenţă de nivel: 2,576 m. Timp total parcurs de
              noi: 12 ore si 16 min
            </p>
            <p>Izvoare pe traseu la Refugiul Iezer și lângă Vf. Bătrâna</p>
            <p>
              1 iunie 2023 Aștept comentarii sau mesaje. Mulțumesc pentru
              like/Follow la pagina mea de facebook sau instagram. Email Iustin
              Ichim
            </p>
          </div>
          <div className="right">
            <img src={blog1.image} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
