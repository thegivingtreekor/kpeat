import React from 'react'

function Promotion() {
  return (
    <div class="w-full bg-linear-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-white">
      <div className="container mx-auto py-10">
        <p className="text-3xl">농기계 보조사업 지원을 위한 견적서 발행요청</p>
        <ul className="mt-5">
          <li className="flex"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
견적서 즉시 발행</li>
          <li className="flex"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
비교견적서, 타인견적서 발행</li>
          <li className="flex"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
담당자 배정 및 관리</li>
        </ul>
      </div>
    </div>
  )
}

export default Promotion