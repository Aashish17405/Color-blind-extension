import './App.css'
import Button from './components/Button'
import logo from './logo.png'

function App() {

  return (
    <div>
      <div className='p-5 bg-[#2A292B] text-[#FEFCFF]'>
        <img
          src={logo}
          className='App-logo'
          alt='logo'
        />
        <h1 className='text-2xl'>Color Blind helper</h1>

        <div className='flex mt-2'>
          <p className=''>Color Blind</p> 
          <Button/>
        </div>        
      </div>
    </div>
  )
}

export default App
