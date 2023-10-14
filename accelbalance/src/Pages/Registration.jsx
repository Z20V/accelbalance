import React from 'react';

function Registration() {
  return (
    <div className='mt-10'>
      <div className='self-center'>
        <h1 className='text-white'>Создать учётную запись</h1>
      </div>
      <form action="POST">
      <div className="center flex flex-col max-w-sm mx-auto">
        <input type="text" className="rounded-full bg-stone-600 my-2 mt-6 h-12 text-center "placeholder='Фамилия'/>
        <input type="text" className="rounded-full bg-stone-600 my-2 mt-6 h-12 text-center "placeholder='Имя' />
        <input type="text" className="rounded-full bg-stone-600 my-2 mt-6 h-12 text-center "placeholder='Отчество' />
        <input type="password" className="rounded-full bg-stone-600 my-2 mt-6 h-12 text-center "placeholder='Пароль*' />
        <input type="email" className="rounded-full bg-stone-600 my-2 mt-6 h-12 text-center "placeholder='E-mail*' />
        <input type="date" className="rounded-full bg-stone-600 my-2 mt-6 h-12 text-center "placeholder='Дата рождения' />
        
      </div>
      </form>
   

      <div className='center items-center'>
        <input type="checkbox" className="rounded-full p-2 bg-stone-600 border-2 border-stone-600" />
        <p className='text-stone-600'>Согласие на обработку персональных данных</p>
    </div>
    <div className="center flex flex-col max-w-sm mx-auto">
        <button name='nime' className="rounded-full bg-stone-600 my-2 mt-6 h-12 text-center text-slate-50">Продолжить</button>
    <div className="center flex flex-col max-w-sm mx-auto"></div>
        <p className='text-neutral-600'>*Обязательное поле для ввода</p>
        <p className='text-red-600'>Уже зарегистрированы? </p>
        <p className='text-neutral-600'>Связаться с нами </p>
    </div>
    </div>
  );
}

export default Registration;
