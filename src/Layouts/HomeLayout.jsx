import React from 'react';
import Header from '../Components/Header';
import LatestNews from '../Components/LatestNews';
import Navbar from '../Components/Navbar';
import LeftContent from '../Components/MainContent/LeftContent';
import RightContent from '../Components/MainContent/RightContent';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
    return (
        <div className='font-poppins mb-10'>
            <Header></Header>
            <section className='w-11/12 mx-auto'>
                <LatestNews></LatestNews>
            </section>
            <section className='w-11/12 mx-auto mt-4'>
                <Navbar></Navbar>
            </section>
            <main className='w-11/12 mx-auto pt-5 grid md:grid-cols-12 gap-5'>
                {/* left navbar  */}
                <aside className='col-span-3'>
                    <LeftContent></LeftContent>
                </aside>
                {/* Middle content  */}
                <section className='col-span-6'>
                    <Outlet></Outlet>
                </section>
                {/* Right navbar  */}
                <aside className='col-span-3'>
                    <RightContent></RightContent>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;