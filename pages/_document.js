import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'
import React, { Fragment, useState, useEffect } from 'react'


export default function Document() {


    return (
        <Html>
            <Head />
            <body>
                <Main />
                <NextScript />

                <Script defer src="../components/cookieconsent.js" />

            </body>
        </Html>
    )
}