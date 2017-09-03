# React Native Base UI

A Kondo Soft initiative by Carlos Gonzalez

A simple cross platform  native UI for both Android and IOS

## Why?

React Native is huge and beautiful, but we don't have a boilerplate that fills the need of a customisable yet cross platform and out of the box implementation of cross platform Native UI

##Inspired by...

@maxstoiber React Boilerplate
@geekyants Native Base



##Based on

IOS
https://developer.apple.com/ios/human-interface-guidelines/ui-controls/buttons/

Android
https://developer.android.com/guide/practices/ui_guidelines/index.html


#Components vs Containers

##Components

Everything related strictly to the way thinks look


##Containers

Everything that holds Components, like the above.



#Instalation

```
npm install react-native-base-ui
rnpm link ls

```

#UI Components

## Button

A basic button for IOS and android, it can be used as a text button, or a Icon button, or both at the same time.

```js
import { Button } from 'react-native-base-ui'
<Button
  onPress = {()=>{console.log('I am a cross platform button');}}
  size={25} // optional, will make Icon and size change size
  icon='star' // optional choose the icon you want to show
  outlined // optional, true by default on Android, will add a border on IOS
>You should star this repo</Button>
```

If you wan't to use it as Icon just remove the content i.e.

```
<Button
  onPress = {()=>{console.log('I am a cross platform button');}}
  icon='star'
/>
```
