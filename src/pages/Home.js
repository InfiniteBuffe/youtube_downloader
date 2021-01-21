import React from 'react';
import { MenuBar, MenuBarItem, Title, Input } from '../components/index';

const Home = () => {
    return (
        <>
            <MenuBar>
                <MenuBarItem name="🏠 홈" active to="/" />
                <MenuBarItem name="🔍 검색" to="/search" />
                <MenuBarItem name="📕 활동" to="/history" />
                <MenuBarItem name="설정" to="/setting" />
            </MenuBar>
            <Title text="시작하기 🚀"/>
            <Input placeholder="여기에 Youtube 주소를 입력하세요"/>
        </>
    )
}

export default Home;