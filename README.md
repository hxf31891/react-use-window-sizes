# useWindowSize - a custom React hook
A lightweight package to easily track window width & height in React.js

Comes in handy for responsize design and animations

## Install
`npm install react-use-window-size`

## Example 
```js
import React from 'react'
import { useWindowSize } from 'react-use-window-size'

function MyApp() {
  const { width, height } = useWindowSize();
  console.log('width:', width, 'height:', height) 

}
```
