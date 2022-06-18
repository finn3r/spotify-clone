import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {SessionProvider} from 'next-auth/react'
import {RecoilRoot} from "recoil";
import SideBar from "../components/SideBar";
import React from "react";
import AccountButton from "../components/AccountButton";
import Player from "../components/Player";

function MyApp({Component, pageProps: {session, ...pageProps}}: AppProps) {
    return (
        <SessionProvider session={session}>
            <RecoilRoot>
                <div className={"bg-black h-screen overflow-hidden min-w-[400px]"}>
                    <AccountButton/>
                    <main className={"flex"}>
                        <SideBar/>
                        <Component {...pageProps} />
                    </main>
                    <div className={"absolute w-screen bottom-0 z-50"}>
                        <Player/>
                    </div>
                </div>
            </RecoilRoot>
        </SessionProvider>
    )
}

export default MyApp;
