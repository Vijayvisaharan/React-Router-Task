import React, { useEffect, useState } from 'react'
import Card from './Card'


function Fullstackdevelopment({ data }) {
    const FullstackdevelopmentData = data.filter((item) => item.course === 'Full Stack Development');


    return (
        <> <figure class="text-center">
            <h1 className='text-danger'>Full Stack Development</h1> </figure>
            <div class="container px-4 px-lg-5 mt-5">

                <div class="row gx-4 gx-lg-4 row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-3 justify-content-center">

                    {FullstackdevelopmentData.map((item, index) => {
                        return (
                            <Card key={index} item={item} />
                        )
                    })};

                </div>
            </div>



        </>
    )
}

export default Fullstackdevelopment
