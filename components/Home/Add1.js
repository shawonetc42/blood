import React from 'react'
import MySlider from './Slide'
import Find from './find'
import AnyQuestion from './AnyQuestion'
import Question from './Question'
import Event from './Event'
import People from './People'
import Photo from './Photo'

function Add1() {
  return (
    <div>
        <MySlider/>
        <Find/>
        <Question/>
        <AnyQuestion/>
        <Event/>
        <People/>
        <Photo/>
    </div>
  )
}

export default Add1