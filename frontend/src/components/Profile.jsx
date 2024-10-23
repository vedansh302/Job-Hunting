import React, { useState } from 'react'
import Navbar from './templates/Navbar'
import { Avatar, AvatarImage } from './ui/avatar'
import { Button } from './ui/button'
import { Contact, Mail, Pen } from 'lucide-react'
import { Badge } from './ui/badge'
import { Label } from './ui/label'
import AppliedJobTable from './AppliedJobTable'
import UpdateProfileDialogue from './UpdateProfileDialogue'
import { useSelector } from 'react-redux'
import store from '@/redux/store'

// const skills = [
//   'Java', 'JavaScript', 'React', 'Node', 'MongoDB', 'MySQL', 'AWS', 'GCP']
const Profile = () => {

  const isResume = true
  const [open, setopen] = useState(false)
  const { user } = useSelector(store => store.auth)

  return (
    <div className='px-4'>
      <Navbar />
      <div className='max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8'>
        <div className='flex justify-between'>
          <div className='flex items-center gap-4 '>
            <Avatar>
              <AvatarImage src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" />
            </Avatar>

            <div>
              <h1 className='font-medium text-lg'>{user?.fullname  || 'Guest'}</h1>
              <p>{user?.profile?.bio || 'No Bio'}</p>
            </div>

          </div>
          <Button onClick={() => setopen(true)} className='text-right' variant='outline'><Pen /></Button>
        </div>

        <div className='my-5'>
          <div className='flex items-center gap-3 my-2'>
            <Mail />
            <span>{user?.email || 'Guest@gmail.com'}</span>

          </div>
          <div className='flex items-center gap-3 my-2'>
            <Contact />
            <span>{user?.phoneNumber ||'9999999999'}</span>
          </div>
        </div>

        <div className='my-5'>
          <h1 className='font-medium'>Skills</h1>
          <div className='flex items-center gap-1'>
            {
              user?.profile?.skills.length !== 0 ? user?.profile?.skills.map((item, index) => <Badge key={{ index }}>{item}</Badge>)|| 'Fresher' : <span>Fresher</span>
            }
          </div>
        </div>

        <div className='grid w-full max-w-sm items-center gap-1.5'>
          <Label className="text-md font-bold">Resume</Label>
          {
            isResume ? <a href={user?.profile?.resume} target="_blank" rel="noreferrer" className='text-blue-500 w-full hover:underline cursor-pointer'>{user?.profile?.resumeOriginalName || 'No Resume'}</a>  : <span>No Resume</span>
          }
        </div>


      </div>

      <div className='max-w-4xl mx-auto bg-white rounded-xl'>
        <h1 className='font-bold text-lg my-5 px-4'>Applied Job</h1>
        <AppliedJobTable />
      </div>
      <UpdateProfileDialogue open={open} setopen={setopen} />
    </div>
  )
}

export default Profile