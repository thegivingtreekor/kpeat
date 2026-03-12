import React from 'react';

function Footer() {
    return (
        <footer className="footer sm:footer-horizontal bg-base-300 text-base-content p-10 place-items-center">
            <nav>
                <h6 className="footer-title">회사소개</h6>
                <a className="link link-hover">인사말</a>
                <a className="link link-hover">사업분야</a>
                <a className="link link-hover">비전</a>
                <a className="link link-hover">오시는길</a>
            </nav>
            <nav>
                <h6 className="footer-title">제품소개</h6>
                <a className="link link-hover">유럽</a>
                <a className="link link-hover">러시아</a>
            </nav>
            <nav>
                <h6 className="footer-title">구매/문의</h6>
                <a className="link link-hover">카탈로그</a>
                <a className="link link-hover">견적서</a>
            </nav>
            <nav>
                <h6 className="footer-title">고객센터</h6>
                <a className="link link-hover">자주묻는질문</a>
                <a className="link link-hover">공지사항</a>
                <a className="link link-hover">질문답변</a>
            </nav>
            <nav>
                <h6 className="footer-title">Social</h6>
                <div className="grid grid-flow-col gap-4">
                    <a>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram-icon lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                    </a>
                    <a>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-youtube-icon lucide-youtube"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
                    </a>
                    <a>
                        
                    </a>
                </div>
            </nav>
        </footer>
    );
}

export default Footer;
