import React from 'react'
import Card from './Card'


function Career({ data }) {
    const CareerData = data.filter((item) => item.course === 'Career Development');
    return (
        <>
            <figure class="text-center">
                <h1 className='text-danger'>Career Development</h1> </figure>
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-3 justify-content-center">
                    {CareerData.map((item, index) => (
                        <Card key={index} item={item} index={index} />
                    ))}
                </div>
            </div>

        </>
    )
}

export default Career
