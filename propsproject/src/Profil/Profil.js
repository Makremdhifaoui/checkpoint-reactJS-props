import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import image from './photo.jpg'
import './style.css';
import propTypes from 'prop-types'

const Profil = ({fullName,bio,profession,greeting}) => {

  return (
    <div>
        <Card style={{ width: '18rem' }}>
      <Card.Img style={{width:"400px" ,height:"400px"}} src={image} />
      <Card.Body>
        <Card.Title className="title" style={{fontSize:"25px",fontFamily:"times new roman"}}>{fullName}</Card.Title>
        <Card.Text style={{fontSize:"25px",fontFamily:"times new roman"}}>{profession}</Card.Text>
        <Card.Text style={{fontSize:"20px",fontFamily:"times new roman"}}>{bio}</Card.Text>
        <Button style={{ width:"300px",height:"30px"}} onClick={()=> greeting({fullName})}>View More</Button>
      </Card.Body>
    </Card>

    </div>
  )
}

Profil.defaultProps={
  fullName:"Mohamed Ali ",
  }

Profil.propTypes = {
  fullName: propTypes.string,
  bio: propTypes.string,
  Profession: propTypes.string,
  };
  

export default Profil
