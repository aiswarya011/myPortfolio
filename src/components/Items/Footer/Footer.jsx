import React from 'react'
import './Footer.css'

const Footer = () => {
      const year = new Date().getFullYear();
    return (
        <div>
            <footer className="footer">
                <div>
                    {year} &copy;All Rights Reserved.
                </div>
            </footer>
        </div>
    )
}

export default Footer
