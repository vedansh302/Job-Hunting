import React from 'react'
import LatestJobCards from './LatestJobCards'
import { useSelector } from 'react-redux'
import useGetAllJobs from '@/hooks/useGetAllJobs'

const RandomJobs = [1, 2, 3, 4, 5, 6, 7, 8]

const LatestJobs = () => {
  useGetAllJobs()
  const { allJobs } = useSelector(store => store.job)
  // console.log("allJob",allJobs)
  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <h1 className='text-4xl font-bold '><span className='text-[#6A38C2]'>Latest</span>Job Openings</h1>
      <div className='grid grid-cols-3 gap-4 mt-5'>
        {
          allJobs.length <= 0 ? <span>No jobs Found</span> : allJobs?.slice(0, 6).map((job) => <LatestJobCards key={job._id} job={job} />)
        }

      </div>
    </div>
  )
}

export default LatestJobs