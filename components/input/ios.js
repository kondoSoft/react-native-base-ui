import React from 'react'

import styled from 'styled-components/native'

import Icon from 'react-native-vector-icons/Ionicons'


const baseProps = {
  fontSize:25,
}

const Input = (props)=>{
  const {
    children,
  } = props
  return (
    <Text>{children}</Text>
  )
}
export {Input}
