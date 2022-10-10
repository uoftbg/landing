import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>UofT Blockchain Group</title>
        <meta
          name="description"
          content="Connecting students to the blockchain."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen bg-uoftbg-purple-darkest">
        <main className="container mx-auto px-8">
          <div className="h-full flex-row">
            <div className="pt-20">
              <h1 className="text-4xl font-medium small-caps tracking-widest text-white">
                utbg
              </h1>
            </div>
          </div>
        </main>
      </div>
    </React.Fragment>
  )
}

export default Home
