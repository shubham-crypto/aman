import React from 'react'
import { Core } from '../componenets/Core'
import { Slider } from '../componenets/Slider'
import requests from '../Request'

export const Home = () => {
  return (
    <>
      <Core />
      <Slider rowId='1' title='Up Coming' fetchURL={requests.requestUpcoming}/>
        <Slider rowId='2' title='Up Popular' fetchURL={requests.requestPopular}/>
        <Slider rowId='3' title='Up Trending' fetchURL={requests.requestTrending}/>
        <Slider rowId='4' title='Top Rated' fetchURL={requests.requestTopRated}/>
    </>
  )
}
