import React from 'react';

import tradingTools from '@/images/illustrations/tradingtools.png';
import SecondaryButton from '@/components/buttons/SecondaryButton';
import { Fade } from 'react-reveal';

export default function TradingToolsSection() {
	return (
		<section
			className='px-6'
			id='reviews'
		>
			<div className='rounded-3xl bg-gradient-to-b from-[#FFFFFF] to-[#F4F9FF] py-20'>
				<div className='container mx-auto'>
					<div className='grid md:grid-cols-2 gap-6'>
						<div className='lg:row-start-1 max-w-lg'>
							<h2 className='font-bold text-4xl mb-6 leading-normal'>
								Your Reviews{' '}
								<span className='text-blue-gradient'>300+</span>
							</h2>
							<div className='mb-6'>
								<h3 className='font-bold text-xl mb-4'>
                  Zephyr Mistwood ⭐⭐⭐⭐⭐
								</h3>
								<p className='text-gray'>
                "Wow, this exchange has been an absolute game-changer for me! The sleek interface makes trading a breeze, and the lightning-fast transactions have me feeling like I'm in the future. I've never had such a smooth experience with a crypto exchange. Kudos to the team behind this gem!"
								</p>
							</div>
							<div className='mb-6'>
								<h3 className='font-bold text-xl mb-4'>
                Lyric Everhart ⭐⭐⭐⭐⭐
								</h3>
								<p className='text-gray'>
                "I move substantial amounts of crypto, and I can confidently say that this exchange can handle the big leagues. The high liquidity and advanced trading tools give me the power I need to execute my strategies effectively. This is the exchange for serious traders who mean business."
								</p>
							</div>
							<div className='mb-6'>
								<h3 className='font-bold text-xl mb-4'>
                Seraphina Thornbrook ⭐⭐⭐⭐
								</h3>
								<p className='text-gray'>
                "As someone new to the crypto world, this exchange was a breath of fresh air. The user-friendly interface and helpful tutorials guided me through my first trades without any hiccups. The security measures also put my mind at ease. I'll definitely be recommending this platform to fellow beginners."
								</p>
							</div>
							<a href='#exchange'>
								<SecondaryButton>Get Started</SecondaryButton>
							</a>

							<a href='#about'>
								<button className='py-4 px-10 text-primary underline'>
									Learn more
								</button>
							</a>
						</div>
						<div className='row-start-1 mb-8'>
							<Fade up>
								<img
									src={tradingTools}
									alt=''
								/>
							</Fade>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
