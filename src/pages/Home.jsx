import React from 'react';
import Hero from '../components/ui/Hero';
import TrendingNfts from '../components/ui/TrendingNfts/TrendingNfts';
import SellerSection from '../components/ui/SellerSection/SellerSection';
import CreateNfts from '../components/ui/CreateNfts/CreateNfts';
const Home=()=> {
  return (
   <>
   <Hero/>
   <TrendingNfts/>
   <SellerSection/>
   <CreateNfts/>
   </>
  )
}
export default Home;
