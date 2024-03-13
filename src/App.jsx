import './App.css'
// import descarga from '../src/assets/descarga.png'
import {useState} from 'react'

function App() {

  const [check, setCheck] = useState('password')

  const handleCheck = () => {
    if (check == 'password'){
      setCheck('text')
    }else{
      setCheck('password')
    }
  }
  
  return (
    <>
     <div className='flex items-center rounded-3xl p-5 gap-3 shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
      <div className='img'>
        <img src='./src/assets/descarga.png' alt="Logo de la Universidad Tecnologica Nacional" />
      </div>
      <div className='flex gap-3 pr-5 flex-col'>
        <label>Legajo</label>
        <input className='p-1 rounded-lg bg-[#f9f9f9] border ' type="text" />
        <label>Contraseña</label>
        <label className='relative items-center'>
          <input className='p-1 pr-7  bg-[#f9f9f9] border rounded-lg' type={check}/>
          <input className='absolute w-5 h-5 top-[20%] right-2 cursor-pointer pr-7' type="checkbox" onChange={ handleCheck } name="" id="" />
        </label>
        <button className='bg-sky-600 text-white'>Ingresar</button>
        
      </div>
     </div>
    </>
  )
}

export default App
