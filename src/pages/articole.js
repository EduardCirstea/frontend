import { useSelector } from 'react-redux'
import { Blogs, Content, Footer } from '../components/home'

import Navbar from '../components/navbar/Navbar'
import './style/articole.scss'
import { blog } from '../blog.js'
import Blog from '../components/home/Blog'
import CreateBlogButton from '../components/blog/CreateBlogButton.jsx'
import { useState } from 'react'
import CreateBlog from '../components/blog/CreateBlog.jsx'

export default function Articole() {
  const { user } = useSelector((state) => state.user)
  const { token } = user
  const [showCreateBlog, setShowCreateBlog] = useState(false)
  console.log(showCreateBlog)
  const title =
    'Cele mai frumoase călătorii prin România, trasee pe munte, peisaje si locuri de vizitat.'
  const p1 = `Sunt fotograf profesionist la evenimente de mulți ani, dar in timpul liber mă relaxez prin călătorii in natură si trasee pe munte in România, hiking, trekking, cătărare ușoară.`
  const p2 = `Vă prezint trasee montane și călătorii cu multe fotografii superbe, peisaje din topul celor mai frumoase locuri de vizitat din Romania.`
  const p3 = `Mai nou am adăugat și filmari aeriene cu drona, zbor peste vârfuri din munții României, zbor peste trasee turistice senzationale si multe altele. Am adăugat in articole si harțile zonei sau track-uri GPS disponibile pentru cine vrea sa le descarce.`
  return (
    <div className="articole ">
      <Navbar />
      <div className="containers blog-home">
        <Content title={title} p1={p1} p2={p2} p3={p3} />
        <hr
          style={{
            background: '#ccc',
            height: '.5px',
            border: 'none',

            width: '100%',
            margin: '40px 0px',
          }}
        />
        {token ? (
          <CreateBlogButton setShowCreateBlog={setShowCreateBlog} />
        ) : null}
        {showCreateBlog && <CreateBlog setShowCreateBlog={setShowCreateBlog} />}
        <div className="text">
          <h2>Trasee si calatorii prin romania</h2>
        </div>
        <div className="row">
          {blog.map((b, i) => (
            <Blog b={b} key={i} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}
