import React from 'react'

const Loading = () => {
     return (<div className="fixed inset-0 flex-center sm:px-8 z-40">
          <main className='layout-container'>
               <div className="centered-content flex-center">
                    <span className="spinner"></span>
               </div>
          </main>
     </div>
     )
}

export default Loading