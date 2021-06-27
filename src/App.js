import React, { useState, useEffect } from 'react'
import storeGet from './store/storeGet'
import  getDefaultData  from './action/actionGetDefault'
// import { getdata } from './action/actionGet'

function App () { 
  const [data, setData] = useState(storeGet.getData()) // eslint-disable-line

  const onChange = () => {
    setData(storeGet.getData())
  }

  useEffect(() => {
    storeGet.addChangeListener(onChange)
    if(storeGet.getData().length === 0) {
      getDefaultData()
    }
    return () => storeGet.removeChangeListener(onchange)
  }, []) // eslint-disable-line

  return (
    <div>
      <span>Hello </span>
      <span>{data}</span>
    </div>
  )
}

export default App