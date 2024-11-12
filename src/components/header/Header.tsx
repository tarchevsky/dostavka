'use client'

import Link from 'next/link'
import cn from 'clsx'
import styles from './Header.module.scss'
import Burger from '@/components/burger/Burger'
import { useEffect, useState } from 'react'
import ThemeToggle from '@/components/themeToggle/ThemeToggle'
import Image from 'next/image'
import Button from "@/components/button/Button";
import {FaPhoneAlt} from "@react-icons/all-files/fa/FaPhoneAlt";
import {FaTelegram} from "@react-icons/all-files/fa/FaTelegram";

const Header = () => {
	const [isMenuActive, setIsMenuActive] = useState(false)

	const menuItems = [
		{ path: '#', label: 'О нас' },
		{ path: '#', label: 'Услуги' },
		{ path: '#', label: 'Тарифы' },
		{ path: '#', label: 'Вопросы и ответы' },
		{ path: '/contacts', label: 'Контакты' }
	]

	const toggleMenu = () => {
		setIsMenuActive(!isMenuActive)
	}

	useEffect(() => {
		if (isMenuActive) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'unset'
		}
	}, [isMenuActive])

	return (
		<header className='cont relative flex justify-between md:justify-between items-center py-4'>
			<Link href='/' className='z-20'>
				<Image src='/logo.png' alt='Логотип организации' width={150} height={40}/>
			</Link>
			<nav
				className={cn(
					{[styles.active]: isMenuActive},
					'fixed md:static z-10 w-full h-full md:w-auto md:h-auto end-0 bottom-0 -translate-y-full md:translate-y-0 opacity-0 md:opacity-100 transition-all duration-300 ease-out'
				)}
			>
				<ul
					tabIndex={0}
					className='absolute md:static menu flex-nowrap gap-5 md:menu-horizontal start-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:translate-y-0 md:translate-x-0 text-[#0D8DD3] font-extrabold'
				>
					{menuItems.map((item, index) => (
						<li
							key={index}
							className={cn(
								styles.item,
								'block text-center opacity-0 md:opacity-100'
							)}
						>
							<Link
								className='px-[10px] btn btn-ghost'
								href={item.path}
							>
								{item.label}
							</Link>
						</li>
					))}
					<li className='justify-center'>
						<ThemeToggle/>
					</li>
					<li>
						<div className='flex md:hidden justify-end flex-col gap-4'>
							<div className='flex gap-4 items-center'>
								<FaTelegram color='#0D8DD3'/>
								<FaPhoneAlt color='#0D8DD3'/>
								<Link href='/'>+79165870269</Link>
							</div>
							<Button tag='button' text='Обратная связь' ariaLabel='Кнопка обратной связи'
									className='btn-outline'/>
						</div>
					</li>
				</ul>
			</nav>
			<div className='hidden md:flex justify-end flex-col gap-4'>
				<div className='flex gap-4 items-center'>
					<FaTelegram color='#0D8DD3'/>
					<FaPhoneAlt color='#0D8DD3'/>
					<Link href='/'>+79165870269</Link>
				</div>
				<Button tag='button' text='Обратная связь' ariaLabel='Кнопка обратной связи' className='btn-outline'/>
			</div>
			<Burger toggleMenu={toggleMenu}/>
		</header>
	)
}

export default Header