import React from 'react'

import styled from 'styled-components/native'

import Icon from 'react-native-vector-icons/Ionicons'


const baseProps = {
  fontSize:25,
}

const ButtonView = styled.TouchableOpacity`
  ${props => props.outlined ? 'border: 1px solid #C7C7CC;' : null}
  padding: 5px;
  border-radius: 3px;
  display: flex
  flex-direction: row;
  align-items: center;

`

const ButtonText = styled.Text`
  color:#007AFF;
  font-size: ${props => props.size ? props.size-10 : baseProps.fontSize-10};
`

const IconStyled = styled(Icon)`
  color:#007AFF;
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
        <IconStyled name={`ios-${icon}`} size={size ? size : baseProps.fontSize} color={iconColor ? iconColor : null} /> :
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
