import Htag from "@/components/Htag/Htag";
import Image from "next/image";

const partnersList = [
    {
        src: '/partners/halva.png',
        alt: 'Халва',
        className: '',
    },
    {
        src: '/partners/boxberry.png',
        alt: 'Боксберри',
        className: '',
    },
    {
        src: '/partners/cdek.png',
        alt: 'Сдек',
        className: '',
    },
    {
        src: '/partners/lamoda.png',
        alt: 'Ламода',
        className: '',
    },
    {
        src: '/partners/avito.png',
        alt: 'Авито',
        className: '',
    },
    {
        src: '/partners/5post.png',
        alt: '5post',
        className: '',
    },
    {
        src: '/partners/exmail.png',
        alt: 'Exmail',
        className: '',
    },
]

const Partners = () => {
    return(
        <>
            <Htag tag='h3' className='text-center font-bold my-5 text-4xl'>Наши партнеры</Htag>
            <div className='cont grid grid-cols-5 items-center justify-center mb-10 gap-10'>
                {partnersList.map((item, index) => (
                    <Image src={item.src} alt={item.alt} key={index} className={item.className} width={200} height={150} />
                ))}
            </div>
        </>
    )
}

export default Partners