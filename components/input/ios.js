import React from 'react'


import styled from 'styled-components/native'

import {Button as BuiButton} from '../button'


const baseProps = {
  fontSize:25,
}

const TextInput = styled.TextInput`
  height: 25;
  width: 95%;
`

const TextInputView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
  padding: 0px 15px ;
  border: 1px solid #FFF;
  border-bottom-color: #A4A4A4;
`
const Button = styled(BuiButton)`
  width: 8%;
`

const Input = (props) => {
  return (
    <TextInputView {...props}>
      <TextInput {...props}/>
      <Button icon='close' onPress={()=>{console.log('clear it');}}/>
    </TextInputView>
  )
}

export {Input}
