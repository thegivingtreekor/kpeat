import React from 'react'

function NewsLetter() {
  return (
    <div className="container mx-auto">
      <p className="text-sm">Subscribe to NewsLetter</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus aut, non nesciunt at exercitationem dignissimos.</p>
      <div className="newsletter">
        <input
          type="text"
          placeholder="username@site.com"
          className="input input-bordered join-item" />
        <button className="btn btn-primary join-item">Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter