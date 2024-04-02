import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'



function Header() {
  return (
    <div>
         <Navbar className="bg-info">
        <Container>
          <Navbar.Brand >
            <Link to={'/'} style={{color:'black', textDecoration: 'none'}}>
            <img className='me-2' src="https://icon-library.com/images/video-player-icon-png/video-player-icon-png-16.jpg" width="30px" alt="" />
            Music Box
            </Link>
            
          </Navbar.Brand>
        </Container>
      </Navbar>
    
    </div>
  )
}

export default Header