import React from 'react'

const layoutRoot = ({children}) => {
  return (
    <html>
        <body>
            {children}
        </body>
    </html>
  )
}

export default layoutRoot