import React from 'react';
import { FaWindows, FaLinux, FaAppStore, FaAndroid } from 'react-icons/fa';

import globoCrypto from '@/images/illustrations/globe.png';
import PrimaryButton from '@/components/buttons/PrimaryButton';
import BlueCircleParticle from '../particles/BlueCircleParticle';
import OrangeCircleParticle from '../particles/OrangeCircleParticle';
import StarParticle from '../particles/StarParticle';
import PurpleCircleParticle from '../particles/PurpleCircleParticle';

export default function HeroSection() {
	return (
		<section
			className='relative bg-primary pt-[140px] bg-opacity-5 pb-24'
			id='home'
		>
			<span className='absolute bg-purple-400 -left-28 -top-28 rounded-full opacity-[20%] blur-3xl aspect-square h-[350px] -z-10 animate-pulse' />
			<span className='absolute bg-gradient-to-br from-primary to-secondary -right-28 -bottom-28 rounded-full opacity-[15%] blur-3xl  delay-700 duration-1000 aspect-square h-[550px] -z-10' />

			<div className='container px-4 mx-auto grid md:grid-cols-2'>
				<div className='flex items-center'>
					<div className='relative'>
						<StarParticle className='absolute top-0 right-0' />
						<PurpleCircleParticle className='absolute bottom-0 -left-12' />

						<p className='text-primary'>EXCHANGE TODAY</p>
						<h1 className='text-4xl md:text-5xl lg:text-6xl font-bold leading-normal'>
							The World’s <br />
							<span className='text-blue-gradient'>
								Fastest Growing
							</span>{' '}
							<br />
							Crypto Exchange
						</h1>
						<div className='mt-4 mb-8'>
							<p className='text-gray'>
								Buy and sell 200+ cryptocurrencies with 20+ flat
								currencies using
							</p>
						</div>
						<div className='col-span-2 lg:flex gap-4 lg:mb-12'>
							<a
								href='#exchange'
								className='border bg-primary border-primary text-white hover:bg-white hover:text-primary transition-colors duration-300 rounded-full py-3 px-6 md:py-4 md:px-10'
							>
								Get Started
							</a>
						</div>
					</div>
				</div>
				<div className='relative hidden md:block'>
					<BlueCircleParticle className='absolute top-0 left-11 duration-[5s]' />
					<OrangeCircleParticle className='absolute bottom-1/4 right-0' />

					<img
						src={globoCrypto}
						alt='Globe'
					/>
				</div>
			</div>
		</section>
	);
}
