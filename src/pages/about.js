import Layout from "@theme/Layout";
import React from "react";
import Head from "@docusaurus/Head";

export default function About() {
    return (
        <Layout>
            <Head>
                <title>About</title>
            </Head>
             <div>
            <h1 className="yellow-text">About</h1>
            <p>This is the about page</p>
            </div>
        </Layout>
    );
}