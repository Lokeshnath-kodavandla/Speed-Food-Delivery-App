import React from 'react'
import Navbar from '../components/Navbar'
import Brandvid from '../components/Brandvid'
import Displayitems from '../components/Displayitems'
import Chains from '../components/chains'
import FirmCollections from '../components/FirmCollection'
import Ft from "../components/Ft"

const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <Brandvid></Brandvid>
      <Displayitems></Displayitems>
      <Chains></Chains>
      <FirmCollections></FirmCollections>
      <Ft></Ft>
    </>
  )
}

export default Home