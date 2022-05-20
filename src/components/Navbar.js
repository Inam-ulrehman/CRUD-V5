import { React } from 'react'

import styled from 'styled-components'

const Navbar = () => {
  return (
    <Wrapper>
      <div className='menu'>
        <button type='button'>Menu</button>
      </div>
      <div className='dashboard'>
        <h3>Dashboard</h3>
      </div>
      <div className='user'>
        <p>Hello </p>
        <button type='button' className='btn'>
          Sign Out
        </button>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  .user {
    p {
      margin: 0;
    }
  }
`
export default Navbar
