import React from 'react'
import { Link } from 'react-router-dom';
import { Container,Row,Col } from 'reactstrap';
import './createNfts.css'

const STEP__DATA = [
    {
        title:'Setup your wallet',
        desc: 'Once you have set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right corner.learn about the wallets we support.',
        icon:'ri-wallet-line'
    },
   
    {
        title:'Create your Collection',
        desc:'Add social links,a description,profile & banner images and set a secondary sales fee.Choose between auctions,fixed-price listings.',
        icon:'ri-file-upload-line'
    },

 {
        title:'Add your NFTs',
        desc: 'Add social links,a description,profile & banner images and set a secondary sales fee.Choose between auctions,fixed-price listings.',
        icon:'ri-image-line'
    },

    {
        title:'List them for sale',
        desc: 'Choose between auctions,fixed-price listings and declining-price listings.You choose how you want to sell your NFTs, and we help you sell.',
        icon:'ri-bookmark-2-line'
    },
   
]

const CreateNfts = () =>{
  return (
   <section>
    <Container>
        <Row>
           <Col lg='12' className='mb-4'>
<h3 className='step_title'>Create and sell your NFTs</h3>
           </Col>

           {STEP__DATA.map((item,index)=> (
           <Col lg='3' md='4' sm='6' key={index}>
            <div className='single_step_item'>
                <span>
                <i class = {item.icon}></i>
                </span>
                <div className='step_item_content'>
                    <h5>
                         <Link to ="/wallet">{item.title}</Link>
                    </h5>
                    <p className='mb-0'>{item.desc}</p>
                </div>
            </div>
           </Col>

           ))}
        </Row>
    </Container>
   </section>
  )
}
export default CreateNfts;