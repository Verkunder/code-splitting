'use client'

import Loader from '@/components/lazy/Loader';
import Mario from '@/components/lazy/Mario';
import dynamic from 'next/dynamic';
import React, { Suspense, useState } from 'react'

const Modal = dynamic(() => import('../components/DynamicImport'));

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className='container mx-auto py-5'>
      <h1 className='text-4xl mt-5 border-b-2 border-slate-200'>Homework code-splitting</h1>
      <div className='py-3'>
        <button
          className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={() => setShowModal(true)}
        >
          Open modal
        </button>
      </div>
      {showModal && <Modal setShowModal={setShowModal}  />}
      <Suspense fallback={<Loader />}>
        <Mario />
      </Suspense>
    </div>
  )
}

export default Home