import React from 'react';
import Footer from '../UI/footer';
import MenuBurger from '../UI/menu_burger';
import Head from 'next/head'

const FullPage = (props) => {
    return (
        <>
            <Head>
                <title>{props.pagetitle}</title>
                <meta name="description" content={props.pagedesc} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <MenuBurger />
                {props.children}
            </main>
            <Footer />
        </>
    )
}

export default FullPage;