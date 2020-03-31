import React, { Component } from 'react';
import '../css/Header.css';

class Header extends Component{
    render(){
        return(
            <header>
                <div id='header'>
                    
                    <div className='header_top'>
                        <p><a href='/'><b>라현희</b>의 포트폴리오 웹 페이지</a></p>
                        <ul className='top_menu' >
                            <li><a href='main.html'>홈</a></li>
                            <li><a href='intro.html'>소개</a></li>
                            <li><a href='map.html'>지도</a></li>
                            <li><a href='board.html'>게시판</a></li>
                        </ul>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;