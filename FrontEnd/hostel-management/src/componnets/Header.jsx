import React from 'react'

function Header() {
  const menu = [
    "Add Students",
    "Edit Students",
    "Student details",
    "View Students",
  ]

  return (
    <header className="bg-blue-600 text-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex space-x-4">
            {menu.map((item, index) => (
              <div
                key={index}
                className="px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200 cursor-pointer"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
