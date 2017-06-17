import React from 'react'
import isBrowser from 'is-in-browser'
import Link from 'next/link'

function isActiveRoute (routeName) {
  if (isBrowser) {
    return window.location.pathname === routeName
  }
}

function Logo () {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125" fill="#ffffff" width="190">
      <path
        d="M68.6 34c-2.6 0-4.7 1.6-5.7 3.8l-25.4-6v-.4c0-3.4-2.8-6.2-6.2-6.2-3.4 0-6.2 2.8-6.2 6.2 0 3.1 2.2 5.6 5.2 6.1v25.1c-2.9.5-5.2 3-5.2 6.1 0 3.4 2.8 6.2 6.2 6.2 3.1 0 5.6-2.2 6.1-5.2h16.7c.5 2.9 3 5.2 6.1 5.2 3.4 0 6.2-2.8 6.2-6.2 0-2.4-1.4-4.4-3.3-5.5l4.8-16.9c.3 0 .6.1.9.1 3.4 0 6.2-2.8 6.2-6.2-.2-3.4-3-6.2-6.4-6.2zm0 10.3c-2.3 0-4.2-1.9-4.2-4.2s1.9-4.2 4.2-4.2c2.3 0 4.2 1.9 4.2 4.2s-1.9 4.2-4.2 4.2zM31.4 27.2c2.3 0 4.2 1.9 4.2 4.2s-1.9 4.2-4.2 4.2c-2.3 0-4.2-1.9-4.2-4.2s1.9-4.2 4.2-4.2zm4.1 41.4c0 2.3-1.9 4.2-4.2 4.2-2.3 0-4.2-1.9-4.2-4.2s1.9-4.2 4.2-4.2c2.4.1 4.2 1.9 4.2 4.2zm24.7 4.2c-2.3 0-4.2-1.9-4.2-4.2s1.9-4.2 4.2-4.2 4.2 1.9 4.2 4.2-1.9 4.2-4.2 4.2zm.9-10.3c-.3 0-.6-.1-.9-.1-3.1 0-5.6 2.2-6.1 5.2H37.5C37 65 35 63 32.4 62.5v-25c2.1-.3 3.9-1.8 4.7-3.7l25.4 6v.4c0 2.4 1.4 4.5 3.4 5.5l-4.8 16.8z" />
    </svg>
  )
}

export default function ({children}) {
  return (
    <div className="main-wrapper">
      <style jsx>{`
        .sidebar{
          height: 100vh;
          width: 250px;
          background-color: #424242;
          font-size: 15px;
          display: flex;
          flex-direction: column;
        }

        .main-wrapper {
          flex-direction: row;
          display: flex;
          flex: 1;
        }

        .content {
          flex: 1;
        }

        ul {
          padding: 20px 0;
          flex: 1;
        }

        li {
          color: whitesmoke;
          font-family: 'Lato', sans-serif;
          line-height: 40px;
          padding-left: 15px;
          cursor: pointer;
        }

        li:hover {
          color: #fff;
          background-color: #2d2d2d;
        }

        a {
          color: #fff;
        }

        .logo {
          height: 180px;
          margin: 0 auto;
        }

        .footer {
          height: 40px;
          text-align: center;
          color: #fff;
          font-family: 'Lato', sans-serif;
        }
      `}</style>

      <div className="sidebar">
        <div className="logo">
          <Logo/>
        </div>
        <ul>
          <li><Link prefetch href="/"><a>JS Object to React PropTypes</a></Link></li>
        </ul>

        <div className="footer">
          Created by <a href="https://github.com/ritz078">@ritz078</a>
        </div>
      </div>
      <div className="content">
        {children}
      </div>
    </div>
  )
}