import React from 'react'
import Header from '../Component/Header'
import Footer from '../Component/Footer'

export default function Layout(props) {
  return (
    <div>
        <Header/>
         {props.component}
         <Footer/>
    </div>
  )
}
