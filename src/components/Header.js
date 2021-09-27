import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
        <Nav>
            <Logo src="/assets/images/logo.svg" alt="Disney+"/>

            <NavMenu>
                <a href="/">
                    <img src="/assets/images/home-icon.svg" alt="home"/>
                    <span>HOME</span>
                </a>

                <a href="/">
                    <img src="/assets/images/search-icon.svg" alt="home"/>
                    <span>SEARCH</span>
                </a>

                <a href="/">
                    <img src="/assets/images/watchlist-icon.svg" alt="home"/>
                    <span>WATCHLIST</span>
                </a>

                <a href="/">
                    <img src="/assets/images/original-icon.svg" alt="home"/>
                    <span>ORIGINALS</span>
                </a>

                <a href="/">
                    <img src="/assets/images/movie-icon.svg" alt="home"/>
                    <span>MOVIES</span>
                </a>

                <a href="/">
                    <img src="/assets/images/series-icon.svg" alt="home"/>
                    <span>SERIES</span>
                </a>
            </NavMenu>

            <UserImg src="/assets/images/slider-badag.jpg" />
        </Nav>
    )
}

export default Header

const Nav = styled.nav`
    height: 70px;
    background: #090b13;
    display: flex;
    align-items: center;
    padding: 0 36px;
    overflow-x: hidden;
    
`

const Logo = styled.img`
    width: 80px;
`

const NavMenu = styled.div`
    display: flex;
    flex: 1; /** to tell that it's the must important component and have to streach as much as he can */
    margin-left: 25px;

    a {
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;
        img {
            height: 20px;
        }
        span {
            font-size: 13px;
            letter-spacing: 1.42px;
            position: relative; /* when we use absolue we need to have a parent in relative to stick it to*/

            /**add a div after the span (the & stands for "this") */
            &:after{
                content: '';
                height: 2px;
                background: white;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -6px;
                opacity: 0;
                transform: scaleX(0);
                transform-origin: left center;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s; /** type of transition */
            }
        }

        &:hover {
            span:after {
                transform: scaleX(1);
                opacity: 1;
            }
        }
    }
`

const UserImg = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    cursor: pointer;
`