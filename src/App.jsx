import './App.css'
import logo from './logo.png'

function App() {

  return (
    <>
      <div className='m-10 mx-20'>
        <img
          src={chrome.runtime.getURL(logo)}
          className='App-logo'
          alt='logo'
        />
        <h1 className='text-2xl'>Color Blind helper</h1>
      </div>
    </>
  )
}

export default App
