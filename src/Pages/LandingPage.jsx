import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'



function LandingPage() {
  const navigateByURL = useNavigate()

  return (
    <>
    <Row className="mt-5 align-items-center justify-content-between w-100">
<Col></Col>

<Col lg={5}>
  <h1 style={{fontSize:'40px'}}>Welcome to <span className='text-light'>Media-Player</span></h1>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea eum repudiandae est nulla fuga. Doloribus aperiam harum tempore inventore, eos tempora omnis qui. Tempora quam consequuntur velit facilis numquam amet?</p>
  <button onClick={()=>navigateByURL('./home')} className='btn btn-warning mt-4'>Get Started</button>
</Col>
<Col lg={5}>
  <img src="https://i.gifer.com/origin/86/86c2069faefa082ce4c6d380b78abbfa.gif" width="600px" alt="" />
</Col>
<Col></Col>

    </Row>

    <div className="container mb-5 mt-5 d-flex align-items-center justify-content-center flex-column">
      <h3>Features</h3>

      <div className='cards mb-5 mt-5 d-flex align-items-center justify-content-between w-100'>

      <Card style={{ width: '22rem' }} className='p-4 bg-info'>
      <Card.Img variant="top" height={'300px'} width={'300px'} src="https://media.tenor.com/J8CqhmNqBlUAAAAd/play-button.gif" />
      <Card.Body>
        <Card.Title className='text-primary'>Managing Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      
      </Card.Body>
    </Card>

    <Card style={{ width: '22rem' }} className='p-4 bg-info'>
      <Card.Img variant="top" height={'300px'} width={'300px'} src="https://www.queness.com/resources/uploaded/animated-icons-preview_014116.gif" />
      <Card.Body>
        <Card.Title className='text-primary'>Categorized Video</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      
      </Card.Body>
    </Card>


    <Card style={{ width: '22rem' }} className='p-4 bg-info'>
      <Card.Img variant="top" height={'300px'} width={'300px'} src="https://cdn-images-1.medium.com/max/800/1*8-5D3nWQWYnb21uAz2yMTQ.gif" />
      <Card.Body>
        <Card.Title className='text-primary'>Watch History</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      
      </Card.Body>
    </Card>
      </div>
    </div>

<div className='container border rounded p-5 border-light mb-5 d-flex align-items-center justify-content-between w-100'>
  <div className='col-lg-5'>
    <h4 className='text-primary'>Simple,Powerful & Fast</h4>

    <h6 className='mb-5 mt-3'><span className='text-primary fw-bolder'>Play Everything</span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel inventore maxime doloremque possimus alias necessitatibus, labore error et fuga, incidunt magni! Sint vitae tenetur voluptates asperiores nobis sunt laborum repellat!</h6>

    <h6 className='mb-5 mt-3'><span className='text-primary fw-bolder'>Managing Video</span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel inventore maxime doloremque possimus alias necessitatibus, labore error et fuga, incidunt magni! Sint vitae tenetur voluptates asperiores nobis sunt laborum repellat!</h6>

    <h6 className='mb-5 mt-3'><span className='text-primary fw-bolder'>Categorize Video</span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel inventore maxime doloremque possimus alias necessitatibus, labore error et fuga, incidunt magni! Sint vitae tenetur voluptates asperiores nobis sunt laborum repellat!</h6>

    
  </div>
  <div className='video col-lg-5'>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/qFLhGq0060w?si=7HOGMFVa38mbo0UD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

    </div>

</div>

    </>
  )
}

export default LandingPage