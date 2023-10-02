import classNames from 'classnames';
import React, { forwardRef, useState } from 'react';
import { BsChevronUp } from 'react-icons/bs';

import faq from '@/images/illustrations/faq.png';
import { Fade } from 'react-reveal';

const FaqItem = ({ open, title, children }) => {
	const [isOpen, setIsOpen] = useState(open ? true : false);

	const iconClass = classNames({
		'transition-all duration-300': true,
		'rotate-180': isOpen,
	});

	const contentClass = classNames({
		'text-gray transition-all duration-300 overflow-hidden': true,
		'h-full': isOpen,
		'h-0': !isOpen,
	});

	return (
		<div className='mb-3 border-b border-lightgray pb-3' id ="questions">
			<div
				className='flex justify-between py-3 cursor-pointer hover:text-primary'
				onClick={() => setIsOpen(!isOpen)}
			>
				{title}
				<BsChevronUp className={iconClass} />
			</div>
			<div className={contentClass}>
				<p className='select-none'>{children}</p>
			</div>
		</div>
	);
};

const FaqSection=()=> {
	return (
		<section className='container mx-auto py-32' id='FaqSection'>
			<div className='grid md:grid-cols-2'>
				<div className='mb-4'>
					<Fade
						up
						duration={1000}
					>
						<img
							src={faq}
							alt='FAQ'
						/>
					</Fade>
				</div>
				<div className='flex justify-center'>
					<div className=''>
						<span className='text-primary'>SUPPORT</span>
						<h2 className='font-bold text-4xl mb-6 leading-normal'>
							Frequently asked questions
						</h2>
						<div className='my-6'>
							<FaqItem
								open={true}
								title='Why should I choose NEFA?'
							>
								Data is encrypted during storage and
								transmission. Strict authorization controls are
								in place to ensure that only you have access to
								your personal and private information.{' '}
							</FaqItem>
							<FaqItem
								open={false}
								title='How secure is NEFA?'
							>
								All of our products and services are built
								around the principles of data privacy. We are
								transparent about the data we collect from our
								users and are open about how we use and share
								it.{' '}
							</FaqItem>
							<FaqItem
								open={false}
								title='Three-level asset protection'
							>
								User funds are safely stored offline in cold
								wallets. Experience the benefits of triple fund
								protection in our cold wallets, where users'
								assets are securely stored under comprehensive
								protection, giving you a sense of confidence and
								security.{' '}
							</FaqItem>
							<FaqItem
								open={false}
								title='Dedicated customer support'
							>
								Corporate accounts and professional traders are
								granted Tier One customer support, with ticket
								responses expedited to a dedicated team of our
								top performing customer support personnel. The
								Tier One team handles all corporate account
								tickets from raise to completion, coordinating
								issue resolution across multiple teams, with
								24/7 support.{' '}
							</FaqItem>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default forwardRef(FaqSection)