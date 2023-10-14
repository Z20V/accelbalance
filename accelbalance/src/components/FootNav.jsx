import React from 'react'

function FootNav() {
  return (
    <div>
           <nav class="fixed bottom-0 left-0 right-0 bg-transparent p-4 flex justify-around">
                <a href="#" class="text-white text-2xl">
                    <svg class="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <!-- Здесь добавь код иконки для "Домашняя страница" -->
                    </svg>
                </a>
                <a href="#" class="text-white text-2xl">
                    <svg class="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <!-- Здесь добавь код иконки для "Кошелек" -->
                    </svg>
                </a>
                <a href="#" class="text-white text-2xl">
                    <svg class="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <!-- Здесь добавь код иконки для "Новости" -->
                    </svg>
                </a>
                <a href="#" class="text-white text-2xl">
                    <svg class="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <!-- Здесь добавь код иконки для "Чат" -->
                    </svg>
                </a>
                <a href="#" class="text-white text-2xl">
                    <svg class="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.5 15.15C14.6521 15.15 19 15.9608 19 19.0888C19 22.218 14.6236 23 9.5 23C4.34907 23 0 22.1892 0 19.0612C0 15.932 4.37639 15.15 9.5 15.15ZM9.5 0C12.9902 0 15.7866 2.70713 15.7866 6.08471C15.7866 9.46229 12.9902 12.1706 9.5 12.1706C6.011 12.1706 3.21339 9.46229 3.21339 6.08471C3.21339 2.70713 6.011 0 9.5 0Z" fill="#A4A4A4"/>
                    </svg>
                </a>
            </nav>
    </div>
  )
}

export default FootNav