import React, { useEffect } from 'react'

const DataTable = () => {
    let API = 'https://schema.getpostman.com/json/collection/v2.1.0/api/v2/player_suggestion'

    const fetchApiData = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchApiData(API)
    }, []);

    return (
        <div>
            hello
        </div>
    )
}

export default DataTable
