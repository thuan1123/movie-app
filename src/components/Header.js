import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function Header(props) {
    const { items } = props;
    console.log(items)
    return (
        <Router>
            <StyledWrapper>
                <ul style={{ display: 'flex', listStyle: 'none' }}>
                    {items.map((item, index) => (
                        <li
                            key={index}
                            className='list-item'
                        ><Link to='/' className='list-item-link'>{item}</Link></li>
                    ))}
                </ul>
            </StyledWrapper>
        </Router>
    );
}

export default Header;

const StyledWrapper = styled.div`
     .list-item{
        padding:15px;
        cursor:pointer;
     }
     .list-item-link{
         text-decoration:none;
         font-size:1.6rem;
         font-weight:500;
         color:rgb(255,255,255);
     }
 `;


