import React from 'react';

import Home from '../pages/Home';
import About from '../pages/About';
import Fanfiction from '../fanfiction/FanfictionList';
import Reviews from '../reviews/Reviews'

import AppHeader from '../layout/AppHeader';
import Gallery from '../pages/Gallery';


export default function Dashboard() {
    return (
<div>
        <AppHeader />
        <Home />
        <About />
        <Fanfiction />
        <Reviews />
        <Gallery />

</div>
    )
    }

