import React, {useState} from 'react'

function NewsLetter() {
  const [email, setEmail] = useState('')
  const [disable, setDisable] = useState(false)
  const subscribe = (email) => {
    console.log(email);
  }
  return (
    <div className="container mx-auto py-5 text-center">
      <p className="text-sm">뉴스레터 구독하기</p>
      <p>피트모스 관련 최신 소식과 동향을 뉴스레터로 수신하려면 이메일을 등록하세요!</p>
      <div className="newsletter">
        <input id="email"
          type="email"
          placeholder="news@kpeat.com"
          className="input input-bordered join-item mr-1" value={email} onChange={(e) => setEmail(e.target.value)} onClick={() => setDisable()} />
        <button className="btn btn-primary join-item bg-[#000000]">구독하기</button>        
      </div>
    </div>
  )
}

export default NewsLetter