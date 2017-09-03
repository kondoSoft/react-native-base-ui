import React from 'react'

import styled from 'styled-components/native'

import Icon from 'react-native-vector-icons/Ionicons'


const baseProps = {
  fontSize:25,
}

const ButtonView = styled.TouchableOpacity`
  ${props => props.outlined ? 'border: 1px solid #E6E6E6;' : null}
  border-radius: 2px;
  display: flex
  flex-direction: row;
  align-items: center;
  border-bottom-color: #A4A4A4;
  padding: 15px 30px;
  background: #D6D6D6;

`

const ButtonText = styled.Text`
  color:#595A59;
  font-size: ${props => props.size ? props.size-10 : baseProps.fontSize-10};
`

const IconStyled = styled(Icon)`
  color:#595A59;
`
const Button = (props)=>{
  const {
    children,
    iconColor,
    icon,
    size,
    outlined
  } = props
  return (
    <ButtonView {...props}>
      {icon ?
        <IconStyled name={`android-${icon}`} size={size ? size : baseProps.fontSize} color={iconColor ? iconColor : null} /> :
        null
      }
      {
        children ?
        <ButtonText size={size}> {children}</ButtonText>
        : null
      }
    </ButtonView>
  )
}
export {Button}
