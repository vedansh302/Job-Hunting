import React from 'react'
import Navbar from './templates/Navbar'
import Job from './Job'

const randomjobs = [1, 2, 3]
const Browse = () => {
    return (
        <div>
            <Navbar />
            <div className='max-w-7xl mx-auto my-10'>
                <h1 className='font-bold text-xl my-10 px-4'>Search Result ({randomjobs.length})</h1>
                <div className='grid grid-cols-3 gap-4 mt-5'>
                    {
                        randomjobs.map((item, index) => {
                            return (
                                <Job />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Browse