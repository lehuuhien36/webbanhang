import React from 'react'
import Header from './Header'
import Footer from './Folder'

export default function ContainWrapper({children}) {
  return (
    <div>
       <Header />
      
       {children}
       <Footer />
     </div>
    )
}  

