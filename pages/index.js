// import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image';
import Header from '../components/Header'
import Main from '../components/Main'
import TransactionHistory from '../components/TransactionHistory'

const style = {
  wrapper: `h-auto max-h-auto h-min-screen w-screen bg-[#2D242F] text-white select-none flex flex-col justify-between`,
}

const Home = () => {
  return (
    <div className={style.wrapper}>
      <Header/>
      <Main/>
      <TransactionHistory/>
    </div>
  )
}

export default Home