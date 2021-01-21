import React from 'react';
import { MenuBar, MenuBarItem } from '../components/index';

const Home = () => {
    return (
        <>
            <MenuBar>
                <MenuBarItem name="홈" active to="/" />
                <MenuBarItem name="검색" to="/search" />
                <MenuBarItem name="활동" to="/history" />
                <MenuBarItem name="설정" to="/setting" />
            </MenuBar>
        </>
    )
}

export default Home;