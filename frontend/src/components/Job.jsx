import React from 'react'
import { Button } from './ui/button'
import { Bookmark } from 'lucide-react'
import { Avatar, AvatarImage } from './ui/avatar'
import { Badge } from './ui/badge'
import { useNavigate } from 'react-router'

const Job = ({ job }) => {
    const navigate = useNavigate()
    // const jobId = "1"
    const daysAgoFunction = (mongodbTime) => {
        const createdAt = new Date(mongodbTime)
        const currentTime = new Date()
        const timeDifference = currentTime - createdAt
        return Math.floor(timeDifference / (1000 * 24 * 60 * 60))
    }
    return (
        <div className='p-5 rounded-md shadow-xl bg-white border border-gray-200'>
            <div className='flex items-center justify-between'>
                <p className='text-sm text-gray-700 '>{daysAgoFunction(job?.createdAt) === 0 ? "Today" : daysAgoFunction(job?.createdAt) } days ago</p>
                <Button variant="outline" className="rounded-full" size='icon'><Bookmark /></Button>
            </div>
            <div className='flex items-center gap-2 my-2'>
                <Button>
                    <Avatar>
                        <AvatarImage src="https://png.pngtree.com/png-vector/20220509/ourmid/pngtree-company-logo-design-trademark-design-creative-logo-png-image_4569380.png" />
                    </Avatar>
                </Button>
                <div>
                    <h1 className='font-medium text-lg'>{job?.company?.name}</h1>
                    <p className='text-sm text-gray-500' >India</p>
                </div>
            </div>
            <div>
                <h1 className='font-bold text-lg my-2'>{job?.title}</h1>
                <p className='text-sm text-gray-600'>{job?.description}</p>
            </div>
            <div>
                <Badge className={'text-blue-700 font-bold'} variant={'ghost'}>{job?.position}</Badge>
                <Badge className={'text-[#F83002] font-bold'} variant={'ghost'}>{job?.jobType}</Badge>
                <Badge className={'text-[#7209b7] font-bold'} variant={'ghost'}>{job?.salary}</Badge>
            </div>
            <div className='flex  items-center gap-4 mt-4'>
                <Button onClick={() => navigate(`/description/{${job?._id}`)} variant={'outline'}>Details</Button>
                <Button className="bg-[#6A38C2] hover:bg-[#8756db] text-white hover:text-white">Save for later</Button>
            </div>
        </div>
    )
}

export default Job