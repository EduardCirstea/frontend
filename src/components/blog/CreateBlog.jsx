import './style/blog.scss'
import { useState } from 'react'

export default function CreateBlog({ setShowCreateBlog }) {
  const [formData, setFormData] = useState({
    numeFirma: '',
    adresa: '',
    telefon: '',
    email: '',
    cui: '',
    cif: '',
    banca: '',
    iban: '',
  })
  const { numeFirma, adresa, telefon, email, cui, cif, banca, iban } = formData
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const clientData = {
      numeFirma,
      adresa,
      telefon,
      email,
      cui,
      cif,
      banca,
      iban,
    }
    // dispatch(createClient(clientData))

    setShowCreateBlog(false)
  }
  return (
    <div className="blur">
      <div className="register">
        <div className="register_header">
          <i className="exit_icon" onClick={() => setShowCreateBlog(false)}>
            x
          </i>
          <p>Adauga Client</p>
        </div>
        <form className="register_form" onSubmit={handleSubmit}>
          <label htmlFor="numeFirma">Nume Firma</label>
          <input
            type="text"
            name="numeFirma"
            placeholder="Nume Firma"
            value={numeFirma}
            onChange={onChange}
          />
          <label htmlFor="adresa">Adresa</label>
          <input
            type="text"
            name="adresa"
            placeholder="Adresa"
            value={adresa}
            onChange={onChange}
          />
          <label htmlFor="telefon">Telefon</label>
          <input
            type="text"
            name="telefon"
            placeholder="Telefon"
            value={telefon}
            onChange={onChange}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={onChange}
          />
          <label htmlFor="cui">CUI</label>
          <input
            type="text"
            name="cui"
            placeholder="CUI"
            value={cui}
            onChange={onChange}
          />
          <label htmlFor="cif">CIF</label>
          <input
            type="text"
            name="cif"
            placeholder="CIF"
            value={cif}
            onChange={onChange}
          />
          <label htmlFor="banca">Banca</label>
          <input
            type="text"
            name="banca"
            placeholder="Banca"
            value={banca}
            onChange={onChange}
          />
          <label htmlFor="iban">IBAN</label>
          <input
            type="text"
            name="iban"
            placeholder="IBAN"
            value={iban}
            onChange={onChange}
          />

          <button className="btn-register">Adauga</button>
        </form>
      </div>
    </div>
  )
}
