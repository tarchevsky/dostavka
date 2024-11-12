import {FaBoxOpen} from "@react-icons/all-files/fa/FaBoxOpen";
import {FaCarSide} from "@react-icons/all-files/fa/FaCarSide";
import Htag from "@/components/Htag/Htag";

const About = () => {
    return (
        <>
            <Htag tag='h3' className='text-center font-bold my-5 text-4xl mt-10'>О нас</Htag>
            <div className='cont grid grid-cols-2 gap-10 mb-10'>
                <div className='shadow-xl py-4 px-6'>
                    <div className='grid grid-cols-[100px_auto] items-center gap-6'><FaBoxOpen color='#3591D5' size={100} /><p className='font-bold'>Любые варианты упаковки, переупаковки и маркировки Ваших товаров</p></div>
                    <div className='grid grid-cols-[100px_auto] items-center gap-6'><FaCarSide color='#3591D5' size={100} /><p className='font-bold'>Возможность прямых поставок на маркетплейсы по схеме FBO</p></div>
                </div>
                <p>Наша компания успешно работает в сфере логистических услуг с 2010 года, предоставляя высококачественные курьерские доставки для интернет-магазинов. Мы обслуживаем клиентов в Москве и Московской области, а также в Санкт-Петербурге и Ленинградской области. Наши тарифные планы и условия обслуживания являются одними из лучших на рынке, что доказывает доверие более 500 российских компаний, которые выбрали нас для представления своих интернет-магазинов перед покупателями. Мы гарантируем высокий уровень сервиса и подтверждаем свои обязательства в договоре об уровне обслуживания (SLA).</p>
            </div>
        </>
    )
}
export default About