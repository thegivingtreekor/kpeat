import React, { useState } from 'react';

function Quick() {
    const items = [
        {
            title: 'card title1',
            desc: 'a card component has a figure, a body part, and inside body there are title and actions parts',
            src: 'https://thumbnail.coupangcdn.com/thumbnails/remote/657x657q90trim/image/vendor_inventory/7de5/21f4ef1a006450ac595d1841d3782fbf331cc36eb556ed2b0f15eb6cbda4.jpg',
            alt: 'nordagri'
        },
        {
            title: 'card title2',
            desc: 'a card component has a figure, a body part, and inside body there are title and actions parts',
            src: 'https://thumbnail.coupangcdn.com/thumbnails/remote/657x657q90trim/image/vendor_inventory/5059/fc94721715f3e21734c543597e0a26af1d11ab05d8768ac9803e46041527.jpg',
            alt: 'sekyeong'
        },
        {
            title: 'card title3',
            desc: 'a card component has a figure, a body part, and inside body there are title and actions parts',
            src: 'https://thumbnail.coupangcdn.com/thumbnails/remote/657x657q90trim/image/vendor_inventory/7de5/21f4ef1a006450ac595d1841d3782fbf331cc36eb556ed2b0f15eb6cbda4.jpg',
            alt: 'greenpeat'
        },{
            title: 'card title4',
            desc: 'a card component has a figure, a body part, and inside body there are title and actions parts',
            src: 'https://thumbnail.coupangcdn.com/thumbnails/remote/657x657q90trim/image/vendor_inventory/5059/fc94721715f3e21734c543597e0a26af1d11ab05d8768ac9803e46041527.jpg',
            alt: 'sekyeong'
        }
    ];
    const [lists, setLists] = useState(items);
    return (
        <div className="container mx-auto my-5">
            <ul className="category flex gap-4 pb-5">
                <li className="text-sm uppercase">all</li>
                <li className="text-sm uppercase">peatmoss</li>
                <li className="text-sm uppercase">perlite</li>
                <li className="text-sm uppercase">fertilizer</li>
            </ul>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {lists.map((list) => (
                <div className="card bg-base-100 w-full shadow-sm">
                    <figure>
                        <img className="w-full h-auto md:aspect-auto object-cover"
                            src={list.src}
                            alt={list.desc}
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            ${list.title}
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>${list.desc}</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div>
                            <div className="badge badge-outline">Products</div>
                        </div>
                    </div>
                </div>
            ))}
            </div>
        </div>
    );
}

export default Quick;
