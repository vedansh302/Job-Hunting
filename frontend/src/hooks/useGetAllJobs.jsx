import { setAllJobs } from '@/redux/jobSlice'
import { JOB_API_ENDPPOINT } from '@/utils/constant'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const useGetAllJobs = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        const fetchAllJobs = async () => {
            try {
                const res = await axios.get(`${JOB_API_ENDPPOINT}/get`, { withCredentials: true })
                if (res.data.success) {
                    dispatch(setAllJobs(res.data.jobs))
                } else {
                    console.log("No jobs found in response")
                }
            } catch (error) {
                console.log("Error fetching jobs:", error)
            }
        }

        fetchAllJobs()
    }, [])

}

export default useGetAllJobs