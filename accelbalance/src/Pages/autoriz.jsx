import React from 'react'

function autoriz() {
  return (
    <div className='mt-44'>
    <div className='self-center'>
      <h1 className='text-white'>Вход</h1>
    </div>
    <form action="POST">
    <div className="center flex flex-col max-w-sm mx-auto">
      <input type="email" className="rounded-full bg-stone-600 my-2 mt-6 h-12 text-center "placeholder='E-mail*' />
      <input type="password" className="rounded-full bg-stone-600 my-2 mt-6 h-12 text-center "placeholder='Пароль*' />

      
    </div>
    </form>
 

    <div className='center items-center'>
      <input type="checkbox" className="rounded-full p-2 bg-stone-600 border-2 border-stone-600" />
      <p className='text-stone-600'>Запомнить аккаунт</p>
  </div>
  <div className="center flex flex-col max-w-sm mx-auto">
      <button name='nime' className="rounded-full bg-stone-600 my-2 mt-6 h-12 text-center text-slate-50">Продолжить</button>
  <div className="center flex flex-col max-w-sm mx-auto"></div>
      <p className='text-neutral-600'>Нужна учетная запись?</p>
      <p className='text-red-600'>Зарегистрироваться</p>
      <p className='text-neutral-600'>Связаться с нами </p>
  </div>
  </div>
  )
}

export default autoriz