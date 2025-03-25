import React from 'react'

export function Button({ children, ...props }) {
  return (
    <button
      style={{
        padding: '8px 16px',
        borderRadius: '12px',
        background: '#4f46e5',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
        fontWeight: 'bold'
      }}
      {...props}
    >
      {children}
    </button>
  )
}
