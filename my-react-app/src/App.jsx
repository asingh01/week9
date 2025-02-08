import React, { useEffect, useState } from 'react'

const App = () => {
const [currentTab, setCurrentTab] = useState(1)
const [tabdata, setTabdata] = useState({})
const [loading, setLoading] = useState(false)

useEffect(() => {
  document.title = "Todo#" + currentTab
},[])

useEffect(() => {
    setLoading(true)
//   console.log("Send backend request for: " + currentTab)
  fetch('https://jsonplaceholder.typicode.com/todos/'+currentTab)
      .then(async response => {
                                const json = await response.json()
                                setTabdata(json);
                                setLoading(false)
                              })
      }, [currentTab])

  return (
    <div>
      <button onClick = {function(){setCurrentTab(1)}}style={{backgroundColor:'beige', color: currentTab==1?"red":"black"}}>Todo#1</button>
      <button onClick = {function(){setCurrentTab(2)}}style={{backgroundColor:'yellow',color: currentTab==2?"red":"black"}}>Todo#2</button>
      <button onClick = {function(){setCurrentTab(3)}}style={{backgroundColor:'lightcoral',color: currentTab==3?"red":"black"}}>Todo#3</button>
      <button onClick = {function(){setCurrentTab(4)}}style={{backgroundColor:'skyblue',color: currentTab==4?"red":"black"}}>Todo#4</button>

      {/* {JSON.stringify(tabdata)} */}
      <p>{loading?"Loading...":tabdata.title}</p>
    </div>
  )
}

export default App
