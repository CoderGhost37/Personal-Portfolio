import React from 'react'

const Layout = ({ children, classStyles }: { children: any, classStyles?: string }) => {
    return (
        <div className={`${classStyles} w-full h-full inline-block z-0 bg-light p-16 md:p-32`}>
            {children}
        </div>
    )
}

export default Layout