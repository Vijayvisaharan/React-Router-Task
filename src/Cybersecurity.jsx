import React, { useState } from 'react'
import Card from './Card'



function Cybersecurity({ data }) {
    const CybersecurityData = data.filter((item) => item.course === 'Cyber Security');

    return (
        <>
            <figure class="text-center">
                <h1 className='text-danger'>Cyber Security</h1> </figure>
            <div class="container px-4 px-lg-5 mt-5">

                <div class="row gx-4 gx-lg-4 row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-3 justify-content-center">
                    {CybersecurityData.map((item, index) => {
                        return (
                            <>
                                <Card item={item} index={index} />
                            </>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Cybersecurity
