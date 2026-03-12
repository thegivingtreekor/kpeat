import React, { useState, useEffect } from 'react';

function Quick() {
    const items = [
        {
            id:1,title: 'ASB Gree',
            desc: 'a card component has a figure, a body part, and inside body there are title and actions parts',
            src: 'https://thumbnail.coupangcdn.com/thumbnails/remote/657x657q90trim/image/vendor_inventory/7de5/21f4ef1a006450ac595d1841d3782fbf331cc36eb556ed2b0f15eb6cbda4.jpg',
            alt: 'nordagri',
            category: 'peatmoss'
        },
        {
            id:2,title: 'card title2',
            desc: 'a card component has a figure, a body part, and inside body there are title and actions parts',
            src: 'https://thumbnail.coupangcdn.com/thumbnails/remote/657x657q90trim/image/vendor_inventory/5059/fc94721715f3e21734c543597e0a26af1d11ab05d8768ac9803e46041527.jpg',
            alt: 'sekyeong',
            category: 'peatmoss'
        },
        {
            id:3,title: 'card title3',
            desc: 'a card component has a figure, a body part, and inside body there are title and actions parts',
            src: 'https://thumbnail.coupangcdn.com/thumbnails/remote/657x657q90trim/image/vendor_inventory/7de5/21f4ef1a006450ac595d1841d3782fbf331cc36eb556ed2b0f15eb6cbda4.jpg',
            alt: 'greenpeat',
            category: 'peatmoss'
        },{
            id:4,title: 'card title4',
            desc: 'a card component has a figure, a body part, and inside body there are title and actions parts',
            src: 'https://thumbnail.coupangcdn.com/thumbnails/remote/657x657q90trim/image/vendor_inventory/5059/fc94721715f3e21734c543597e0a26af1d11ab05d8768ac9803e46041527.jpg',
            alt: 'sekyeong',
            category: 'peatmoss'
        }
    ];
    const [lists, setLists] = useState(items);
    return (
        <div className="container mx-auto my-5">
            <ul className="category flex gap-4 pb-5">
                <li className="text-sm uppercase hover:text-amber-800 hover:font-bold">전체보기</li>
                <li className="text-sm uppercase hover:text-gray-800 hover:font-bold">피트모스</li>
                <li className="text-sm uppercase hover:text-gray-800 hover:font-bold">펄라이트</li>
                <li className="text-sm uppercase hover:text-gray-800 hover:font-bold">비료퇴비</li>
            </ul>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {lists.map((list) => (
                <div className="card bg-base-100 w-full shadow-sm" key={list.id}>
                    <figure>
                        <img className="w-full h-auto md:aspect-auto object-cover"
                            src={list.src}
                            alt={list.desc}
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {list.title}
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>${list.desc}</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">장바구니</div>
                            <div className="badge badge-outline">결제하기</div>
                        </div>
                    </div>
                </div>
            ))}
            </div>
        </div>
    );
}

export default Quick;
