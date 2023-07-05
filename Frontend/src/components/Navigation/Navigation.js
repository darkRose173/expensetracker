import React from "react"
import styled from 'styled-components'
import avatar from '../../img/avatar.png'
import { menuItems } from "../../utils/menuitems"

function Navigation(){
    return (
        <NavStyled>
            <div className="user-con">
                <img src={avatar} alt=""/>
                <div classname="text">
                   <h2>Nihal</h2>
                   <p>My Money</p> 

                </div>
            </div>
            <ul className="menu-items">
                 {menuItems.map((item) => {
                    return <li key={item.id}>
                        {item.icon}
                        <span>{item.title}</span>
                    </li>
                 })}
            </ul>
            <div className="bottom-nav">
                <li>
                    {signout} Sign Out </li></div>
        </NavStyled>
    )
}

const NavStyled = styled.nav`

`;