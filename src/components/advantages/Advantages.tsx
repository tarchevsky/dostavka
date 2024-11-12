'use client'

import Htag from "@/components/Htag/Htag";
import Button from "@/components/button/Button";
import {FaAngleRight} from "@react-icons/all-files/fa/FaAngleRight";

const Advantages = () => {
    return (
        <>
            <Htag tag='h3' className='text-center font-bold my-5 text-4xl'>Наши преимущества</Htag>
            <div className='bg-[#F7F8FD] rounded-3xl py-10'>
                <div className="cont grid grid-cols-3 grid-rows-2 gap-16">
                    <div className="bg-[#0D8DD3] py-12 px-8 text-5xl text-white rounded-3xl shadow">
                        <div className='flex flex-col gap-16'>
                            <div>Гибкие тарифные планы</div>
                            <div className='flex justify-between'>
                                <Button text='Подробнее' tag='link' href='#' ariaLabel='Почитать подробнее' />
                                <div className='p-3 rounded-full bg-[#34B4FB]'>
                                    <FaAngleRight size='25' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-base-100 py-12 px-8 text-2xl rounded-3xl shadow">Быстрая, надежная, бережная доставка, чтобы вы были на шаг впереди</div>
                    <div className="bg-base-100 py-12 px-8 text-2xl rounded-3xl shadow">Адаптированные решения под ваши уникальные потребности</div>

                    <div className="bg-base-100 py-12 px-8 text-2xl rounded-3xl shadow">Персональный менеджер 24/7 на связи</div>
                    <div className="flex flex-col gap-10 bg-base-100 col-span-2 py-12 px-8 text-2xl rounded-3xl shadow">
                        <div>Благодаря современным системам безопасности и опытным водителям, ваши товары в надежных руках</div>
                        <Button className='btn-outline justify-center btn-wide m-auto btn-circle text-[#0D8DD3]' tag='button' text='Заключить договор' ariaLabel='Открыть модальное окно' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Advantages;