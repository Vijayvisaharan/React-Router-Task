import React from 'react'



import Card from './Card'

function All({ data }) {
    return (
        <>
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-4 row-cols-md-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-3 justify-content-center">
                    {data.map((item, index) => (
                        <Card key={index} item={item} />
                    ))}
                </div>
            </div>

        </>
    )
}

export default All
