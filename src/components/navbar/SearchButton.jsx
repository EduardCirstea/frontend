import { useEffect, useState } from 'react'
import { IoMdSearch } from 'react-icons/io'
import './search.scss'
import { blog } from '../../blog.js'
import BlogSearchItem from './BlogSearchItem.jsx'

export default function SearchButton() {
  const [text, setText] = useState('')
  const blogNotFound = {
    image: '',
    title: 'Ne pare rau, nu sunt posturi potrivit criteriilor',
    body: 'Vă rugăm să încercați un alt termen de căutare',
  }

  // useEffect(() => {

  //   }
  // }, [text]);
  return (
    <div className="searchd">
      <div className="search-button">
        <div className="div">
          <input
            type="text"
            value={text}
            placeholder="Cautare"
            onChange={(e) => setText(e.target.value)}
          />
          <button>
            <IoMdSearch />
          </button>
        </div>
        {text !== '' && (
          <div className="search-result">
            <h2>Articole</h2>
            {blog.map((blogItem, i) => {
              if (blogItem.title.toLowerCase().startsWith(text.toLowerCase())) {
                return <BlogSearchItem key={i} blog={blogItem} />
              } else if (text !== '') {
                return null
              } else {
                return <BlogSearchItem key={i} blog={blogNotFound} />
              }
            })}
          </div>
        )}
      </div>
    </div>
  )
}
