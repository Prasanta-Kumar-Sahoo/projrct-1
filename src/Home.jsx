import React from 'react';
import SearchBar from './comp/SearchBar';
import Sidebar from './comp/Sidebar';


const Home = () => {

    return (
        <div className="flex flex-col md:flex-row bg-slate-100">
            <Sidebar />
            <SearchBar />
            <div className="flex-grow">

            </div>
        </div>
    );
};

export default Home;
