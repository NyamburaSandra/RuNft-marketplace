import React from 'react'
import './trendingNfts.css'
import { Container, Row, Col } from 'reactstrap'
import NftCard from '../NFTCard/NftCard'
import { NFT__DATA } from '../../../assets/data/data';

const TrendingNfts = () => {
  return (<section>
    <Container>
        <Row>
            <Col lg='12' mb='5'>
                <div className='trending_nfts_top d-flex align-items-center'>
                    <h3>Trending NFTs</h3>
                    
                </div>
            </Col>

                {
                    NFT__DATA.slice(0,4).map((item)=>(
     
             <Col lg='3'>
                        <NftCard key={item.id} item={item}/>
                        </Col>
                    ))
                }
        </Row>
    </Container>
  </section>
  )
}

export default TrendingNfts;
  