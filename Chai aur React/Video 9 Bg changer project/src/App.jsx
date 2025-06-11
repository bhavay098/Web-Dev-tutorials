import { useState } from "react"


function App() {
  const [color, setColor] = useState('olive')

  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 px-2 w-full">
        <div className="flex flex-wrap justify-center gap-2.5 bg-white px-3 py-2 rounded-full">
          <button onClick={() => setColor('red')} className="px-4 py-1 rounded-full text-white" style={{ backgroundColor: 'red' }}>Red</button>
          <button onClick={() => setColor('green')} className="px-4 py-1 rounded-full text-white" style={{ backgroundColor: 'green' }}>Green</button>
          <button onClick={() => setColor('blue')} className="px-4 py-1 rounded-full text-white" style={{ backgroundColor: 'blue' }}>Blue</button>
          <button onClick={() => setColor('purple')} className="px-4 py-1 rounded-full text-white" style={{ backgroundColor: 'purple' }}>Purple</button>

          {/* we passed callback function in onclick as onclick expects the whole function rather than just the returned value by that function */}
        </div>
      </div>
    </div>
  )
}

export default App
