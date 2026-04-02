import React, { useState, useEffect, useRef } from 'react';
import peatmoss1 from '../../assets/peatmoss/peatmoss_1.png';
import peatmoss2 from '../../assets/peatmoss/peatmoss_2.png';
import peatmoss3 from '../../assets/peatmoss/peatmoss_3.png';
import peatmoss4 from '../../assets/peatmoss/peatmoss_4.png';
import peatmoss5 from '../../assets/peatmoss/peatmoss_5.png';
import peatmoss6 from '../../assets/peatmoss/peatmoss_6.png';
import sapling1 from '../../assets/sapling/sapling_star.png';
import sapling2 from '../../assets/sapling/sapling_duke.png';
import styles from './Quick.module.css';
const items = [
    {
                cate_id: '1',
                title: '피트모스',
                subTitle: '블루베리 배양토',
                id: 1,
                title: 'ASB Greenworld',
                desc: '북유럽 최고급 화이트 피트모스 250L, pH3.5~4.5 약산성이며 입자는 0~40mm, 5~25mm 제품이 있습니다. 부피는 250L 이고 습윤제품이 포함되지 않은 순수 피트모스 입니다.',
                src: peatmoss1,
                alt: 'ASB White',
            },
            {
                cate_id: '1',
                title: '피트모스',
                subTitle: '블루베리 배양토',
                id: 2,
                title: 'Gardening Foliage Plat Soil',
                desc: '관엽식물, 야자나무등 홈 가드닝 피트모스 50L 제품으로 가정용 재배를 위한 소포장 제품입니다.',
                src: peatmoss2,
                alt: 'sekyeong',
            },
            {
                cate_id: '1',
                title: '피트모스',
                subTitle: '블루베리 배양토',
                id: 3,
                title: 'GREEN PEAT',
                desc: '동유럽 피트모스 250L로 라트비아에서 생산된 제품입니다. 국내로 유통되는 물량이 많지 않지만 품질은 우수합니다.',
                src: peatmoss3,
                alt: 'greenpeat',
            },
            {
                cate_id: '1',
                title: '피트모스',
                subTitle: '블루베리 배양토',
                id: 4,
                title: 'Gardening Geranium Soil',
                desc: '제라늄 전용 분갈이 흙으로 각종 식물들의 뿌리 생장과 성장을 촉진합니다.',
                src: peatmoss4,
                alt: 'sekyeong',
            },
            {
                cate_id: '1',
                title: '피트모스',
                subTitle: '블루베리 배양토',
                id: 5,
                title: 'GREEN PEAT',
                desc: 'spezial substrate - Russia 150L, 러시아 사할린에서 채취된 피트모스로 2:1 압축이 되어 있으며 충분히 해면한 뒤 사용해야 합니다.',
                src: peatmoss5,
                alt: 'Hanita',
            },
            {
                cate_id: '1',
                title: '피트모스',
                subTitle: '블루베리 배양토',
                id: 6,
                title: 'peat moss - kebifarm',
                desc: '깨비농장 피트모스 250L/포 제품은 국내에서 가장 단 시간에 최고의 판매량을 올린 제품으로 러시아, 라트비아 등 북유럽 여러 국가에서 채취한 피트모스를 펄라이트와 9:1 비율로 혼합한 제품입니다.',
                src: peatmoss6,
                alt: 'kebifarm',
            },
            {
                cate_id: '4',
                title: '묘목',
                subTitle: '블루베리 묘목',
                id: 7,
                title: '블루베리 묘목 - 스타',
                desc: '남부 하이부시 계열에 속하는 품종으로, 꽃자리가 별 모양으로 맛은 신맛이 없고 매우 달고 토양 적응성이 좋습니다.',
                src: sapling1,
                alt: 'gtree',
            },
            {
                cate_id: '4',
                title: '묘목',
                subTitle: '블루베리 묘목',
                id: 8,
                title: '블루베리 묘목 - 듀크',
                desc: '북부 하이부시 계열에 속하는 품종으로, 국내 노지에서 가장먼저 수확할수 있고 16~18mm 크기의 단단한 열매가많이 달립니다. 산미가 좋고 풍미가 좋습니다.',
                src: sapling2,
                alt: 'gtree',
            },
            {
                cate_id: '4',
                title: '묘목',
                subTitle: '블루베리 묘목',
                id: 9,
                title: '블루베리 묘목 - 뉴하노버',
                desc: '대과형 남부 하이부시 품종으로, 6월 중순 수확하는 중생종으로 수세가 강하고 재배가 쉬워 초보자에게 적합합니다.',
                src: sapling1,
                alt: 'gtree',
            },
            {
                cate_id: '4',
                title: '묘목',
                subTitle: '블루베리 묘목',
                id: 10,
                title: '블루베리 묘목 - 신틸라',
                desc: '플로리다에서 개발된 남부 하이부시 품종으로, 조중생종이며 당도, 향, 식감이 우수한 대과종입니다. 열매 꼭지가길어 수확이 쉽지만, 토경 재배가 까다롭고 과육이 부드러워 숙기 관리와 조기 수확이 필수입니다.',
                src: sapling2,
                alt: 'gtree',
            },
            {
                cate_id: '4',
                title: '묘목',
                subTitle: '블루베리 묘목',
                id: 11,
                title: '블루베리 묘목 - 에메랄드',
                desc: '남부 하이부시 계열의 조중생종으로, 저온 요구량(200~300시간)이 낮아 따뜻한 지역에서 재배하기 적합하며, 열매가 특대과 수준으로 매우 크고 맛이 좋으며 수세가 강하고 생산성이 높습니다.',
                src: sapling1,
                alt: 'gtree',
            },
            {
                cate_id: '4',
                title: '묘목',
                subTitle: '블루베리 묘목',
                id: 12,
                title: '블루베리 묘목 - 메도우락',
                desc: '남부 하이부시 계열의 대표적인 조생종 블루베리 품종으로 6월 초중순부터 수확이 가능하며, 17~18mm 이상의 대과종으로 맛과 향이 뛰어나고 저장성이 우수한 것이 특징입니다.',
                src: sapling2,
                alt: 'gtree',
            },
            {
                cate_id: '4',
                title: '묘목',
                subTitle: '블루베리 묘목',
                id: 13,
                title: '블루베리 묘목 - 레가시',
                desc: '남부 하이부시 계열 중 북부종의 특성을 이어받아 내한성이 강하고 (영하 20~25도 내외), 생산성이 매우 우수한 중생종 품종으로 당도(Brix 15.7%)와 향이 뛰어나고 과육이 단단하여 생과용으로 인기가 높습니다.',
                src: sapling1,
                alt: 'gtree',
            },
            {
                cate_id: '4',
                title: '묘목',
                subTitle: '블루베리 묘목',
                id: 14,
                title: '블루베리 묘목 - 인디고크리습',
                desc: '아삭한 식감과 강한 단맛, 약한 신맛이 특징인 남부 하이부쉬 조생종 품종으로 열매가 매우 단단하여 저장성과 수송성이 뛰어나며, 내병성이 강하고 자가수정률이 높아 재배가 용이한 고품질 품종입니다.',
                src: sapling2,
                alt: 'gtree',
            }
];

function Quick() {
    const [lists, setLists] = useState(items);
    const [activeTab, setActiveTab] = useState(null);
    const handleClickTab = (e) => {
        const tab_id = e.target.dataset.id;
        console.log('tab_id : ' + tab_id);
        setActiveTab(tab_id);

        const curr_lists = lists.filter(
            (list) => list.cate_id === tab_id ? list : lists
        );
        setLists(curr_lists)
    };
    useEffect(() => {
        console.log(lists);
    }, [lists]);

    return (
        <div className="container mx-auto my-5">
            <ul className="category flex gap-4 pb-5">
                <li
                    className={
                        activeTab === '0'
                            ? `${styles.active} active text-sm uppercase hover:text-violet-500 hover:font-bold`
                            : 'text-sm uppercase hover:text-violet-500 hover:font-bold'
                    }
                    data-id="0"
                    onClick={handleClickTab}
                >
                    전체보기
                </li>
                <li
                    className={
                        activeTab === '1'
                            ? `${styles.active} active text-sm uppercase hover:text-violet-500 hover:font-bold`
                            : 'text-sm uppercase hover:text-violet-500 hover:font-bold'
                    }
                    data-id="1"
                    onClick={handleClickTab}
                >
                    피트모스
                </li>
                <li
                    className={
                        activeTab === '2'
                            ? `${styles.active} active text-sm uppercase hover:text-violet-500 hover:font-bold`
                            : 'text-sm uppercase hover:text-violet-500 hover:font-bold'
                    }
                    data-id="2"
                    onClick={handleClickTab}
                >
                    펄라이트
                </li>
                <li
                    className={
                        activeTab === '3'
                            ? `${styles.active} active text-sm uppercase hover:text-violet-500 hover:font-bold`
                            : 'text-sm uppercase hover:text-violet-500 hover:font-bold'
                    }
                    data-id="3"
                    onClick={handleClickTab}
                >
                    비료퇴비
                </li>
                <li
                    className={
                        activeTab === '4'
                            ? `${styles.active} active text-sm uppercase hover:text-violet-500 hover:font-bold`
                            : 'text-sm uppercase hover:text-violet-500 hover:font-bold'
                    }
                    data-id="4"
                    onClick={handleClickTab}
                >
                    묘목
                </li>
            </ul>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                {lists.map((list) => (
                    <div
                        className="card bg-base-100 w-full shadow-sm transition-transform duration-300 ease-in-out hover:scale-105"
                        key={list.cate_id}
                    >
                        <figure>
                            <img
                                className="w-full h-auto md:aspect-auto object-cover"
                                src={list.src}
                                alt={list.desc}
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {list.title}
                                <div
                                    className={`badge ${list.id % 2 === 0 ? 'badge-secondary' : 'badge-primary'}`}
                                >
                                    {list.id % 2 === 0 ? 'New' : 'Hot'}
                                </div>
                            </h2>
                            <p>{list.desc}</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">
                                    장바구니
                                </div>
                                <div className="badge badge-outline">
                                    결제하기
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Quick;
