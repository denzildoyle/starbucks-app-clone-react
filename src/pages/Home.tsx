import React from 'react';

import Greeting from '../components/Greeting';

export default function Home() {
    return (
        <div className="home-page">
            <Greeting />
            <h1>Home</h1>
        </div>
    );
}
