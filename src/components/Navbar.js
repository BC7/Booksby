import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import styled from 'styled-components';
import { ButtonContainer } from './Button';

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <NavWrapper className='navbar navbar-expand-sm navbar-dark px-sm-5'>
                    {/* 
    https://www.iconfinder.com/icons/1243689/call_phone_icon
    Creative Commons (Attribution 3.0 Unported);
    https://www.iconfinder.com/Makoto_msk */}
                    <ul className='navbar-nav align-items-center'>
                        <li className='nav-item ml-5'>
                            <Link to='/' className='nav-link'>
                                Books
                            </Link>
                        </li>
                        <li className='nav-item ml-5'>
                            <Link to='/recommended' className='nav-link'>
                                Recommended
                            </Link>
                        </li>
                    </ul>

                    <Link className='m-auto text-title text-white' to='/'>
                        <h1 className="fas fa-book ml-5">  Booksby</h1>
                        {/* <img src={logo} alt='store' className='navbar-brand' /> */}
                    </Link>
                    <Link to='cart' className='ml-auto'>
                        <ButtonContainer className="text-white">
                        <span className="mr-2">
                            <i className='fas fa-cart-plus'></i>
                        </span>
                            My Cart
                        </ButtonContainer>
                    </Link>
                </NavWrapper>
            </div>
        )
    }
}

const NavWrapper = styled.nav`
background: var(--mainBlue);
.nav-link{
    color: var(--mainWhite)!important;
    font-size: 1.3rem;
    text-transform:captalize;
}
`