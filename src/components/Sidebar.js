import React from 'react'
import { NavLink } from 'react-router-dom'
import { links } from '../utils/data'
import styled from 'styled-components'

const Sidebar = () => {
  return (
    <Wrapper>
      {links.map((item) => {
        const { id, path, text } = item
        console.log(item)
        return (
          <NavLink key={id} to={path}>
            {text}
          </NavLink>
        )
      })}
    </Wrapper>
  )
}
const Wrapper = styled.div`
  @media (min-width: 992px) {
    display: none;
  }
  a {
    margin-left: 1rem;
  }
`

export default Sidebar
