import React from 'react';
import { BsArrowRight } from 'react-icons/bs';

import logo from '@/images/logo.svg';
import PrimaryButton from '@/components/buttons/PrimaryButton';

export default function Footer() {
  return (
    <footer >
      <div className="container px-2 border-y py-6 flex w-full justify-center">
        <div className="f">
          <div className="p-6 xl:flex md:justify-between">
            <div className='mb-6'>
              <img src={logo} alt="" />
            </div>
          </div>

          <div className="p-6 w-full lg:col-span-3 xl:col-auto">
            <span className='text-gray'>Newsletter</span>
            <p className='text-gray font-thin'>Never miss anything crypto when you're on the go</p>
            <div className="flex gap-4 my-4">
              <div>
                <input type="email" className="border border-lightgray rounded-xl p-4 outline-none focus:border-primary w-full" placeholder="Enter your email" />
              </div>
              <div>
                <PrimaryButton className="!px-5 aspect-square !rounded-md">
                  <BsArrowRight color='white' />
                </PrimaryButton>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center py-6">
        <p className="text-gray">© Copyright 2021 NEFA LLC. All rights reserved</p>
      </div>
    </footer>
  );
}
