# react-use-window-size
A lightweight package to easily track window size in React.js

## Install
`npm install react-use-window-size`

## Example 
```js
import React from 'react'
import { useWindowSize } from 'react-use-window-size'

function MyApp() {
  const { width, height } = useWindowSize();
  console.log('width:', width, 'height:', height) 

  return (
    <SomeComponent />
  );
}
```
