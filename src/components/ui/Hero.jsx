import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import { Link } from 'react-router-dom';
import './hero.css';
import heroImg from '../../assets/images/hero.jpg'

const Hero = () => {
  return (
    <section className="hero_section">
<Container>
    <Row>
        <Col lg='6' md='6'>
            <div className='hero_content'>
                <h2>Discover rare digital art and collect <span>sell extraordinary</span>NFTs</h2>
                <p>RutNFT is the world's first and largest NFT marketplace</p>

                <div className='hero_btns d-flex align-items-center gap-4'>

                <button className='explore_btn d-flex align-items-center gap-2 '><Link to='/market'>Explore</Link></button>

                <button className='create_btn d-flex align-items-center gap-2 ' ><Link to='/create'>Create</Link></button>
                </div>
            </div>
        </Col>
        <Col lg='6' md='6'>
            <div className='hero_img'>
                <img src = {heroImg}alt=''/>
            </div>
        </Col>
    </Row>
</Container>
    </section>

  )
}
export default Hero;