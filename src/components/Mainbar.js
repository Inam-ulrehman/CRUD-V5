import React from 'react'
import { NavLink } from 'react-router-dom'
import { links } from '../utils/data'
import styled from 'styled-components'

const Mainbar = () => {
  return (
    <Wrapper>
      {links.map((item) => {
        const { id, path, text } = item

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
  @media (max-width: 992px) {
    display: none;
  }
  a {
    margin-left: 1rem;
  }
`

export default Mainbar
