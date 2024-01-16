'use client'
import { calcIMC } from '@/actions/form'

export default function Home() {

  // render ******************************************************************
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center'>
      <h1 className='font-semibold text-xl mb-3 text-center text-purple-500'>
        Bem vindo a Calculadora de IMC da <br />
        <span className='!text-stone-600 text-2xl'>
          CodeArea Software Solutions
        </span>
      </h1>
      <form action={calcIMC}
        className='w-min flex flex-col gap-3 ring-1 ring-purple-500 p-4 rounded-md'
      >
        <input required name='age' placeholder='Idade' type="number" />
        <input required name='height' placeholder='Altura (em cm)' type="number" />
        <input required name='weight' placeholder='Peso em (em Kg)' type="number" />
        <input required name='desired_weight' placeholder='Peso desejado (em Kg)' type="number" />
        <div className='w-full flex flex-col text-center'>
          <h1 className='text-xl'>Qual é o seu sexo?</h1>
          <div className='flex justify-evenly'>
            <div className='flex justify-center items-center gap-2'>
              <label >Masculino</label>
              <input type="radio" required name='gender' value={'m'} />
            </div>
            <div className='flex justify-center items-center gap-2'>
              <label >Feminino</label>
              <input type="radio" required name='gender' value={'f'} />
            </div>
          </div>
        </div>
        <select className='mb-10' name="daily_act" >
          <option value="none">nenhuma atividade</option>
          <option value="low">pouca atividade</option>
          <option value="medium">media atividade</option>
          <option value="high">alta atividade</option>
        </select>

        <button type='submit'>
          Calcular
        </button>
      </form>
    </div>
  )
}
