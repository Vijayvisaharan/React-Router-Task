import React from 'react'

function Card({ item }) {
    const isNew = item.month === 'July'
    return (
        <>
            <div class="container-fluid content-row">

                <div className='row'>

                    <div class="col-sm-12 col-lg-6">
                        <div className='shadow-lg bg-body-tertiary'>

                            <div class="card mt-3 " style={{ width: '24rem' }}>

                                <img src={item.image} height={250} class="card-img-top" alt="Card image cap" />
                                <div class="card-body">
                                    <h5 class="card-title">{item.course}</h5>
                                    <p class="card-text3- mt-1 " >{item.content}</p>
                                    <div id="card-footer" class="mt-2 d-flex flex-row  justify-content-between">
                                        <p className="mb-0 card-text">{item.date} {item.month}</p>
                                        {isNew && <span className="badge bg-primary ms-2">New Update</span>}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
