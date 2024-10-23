import React, { useEffect, useState } from 'react'
import Navbar from '../templates/Navbar'
import { Button } from '../ui/button'
import { ArrowLeft, Loader2 } from 'lucide-react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import axios from 'axios'
import { COMPANY_API_ENDPOINT } from '@/utils/constant'
import { useNavigate, useParams } from 'react-router'
import { toast } from 'sonner'


const CompanySetup = () => {
  const [input, setInput] = useState({
    name: '',
    description: '',
    website: '',
    location: '',
    file: null
  })

  const [loading, setLoading] = useState(false)
  const params = useParams()
  const navigate = useNavigate()

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }

  const changeFileHandler = (e) => {
    setInput({ ...input, file: e.target.files[0] })
  }

  const submitHandler = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('name', input.name)
    formData.append('description', input.description)
    formData.append('website', input.website)
    formData.append('location', input.location)

    if (input.file) {
      formData.append('file', input.file)
    }

    try {
      setLoading(true)
      const res = await axios.put(`${COMPANY_API_ENDPOINT}/update/${params.id}`, formData, {
        headers: {
          "Content-Type": 'multipart/form-data'
        },
        withCredentials: true
      })
      if (res.data.success) {
        toast.success(res.data.message)
        navigate('/admin/companies')
      }
    } catch (error) { 
      console.log(error)
      toast.error(error.response.data.message)
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    setInput({
      name: '',
      description: '',
      website: '',
      location: '',
      file: null
    })
  }, [])

  return (
    <div>
      <Navbar />
      <div className='max-w-xl mx-auto my-10'>
        <form onSubmit={submitHandler}>
          <div className='flex items-center justify-between'>
            <Button onClick={() => navigate('/admin/companies')} className='flex items-center gap-2 text-gray-500 font-semibold' variant='outline'>
              <ArrowLeft />
              <span>back</span>
            </Button>
            <h1 className='font-bold text-xl'>Company Setup</h1>
          </div>
          <div className='grid grid-cols-2 gap-2'>
            <div>
              <Label>Company Name</Label>
              <Input
                type='text'
                name='name'
                value={input.name}
                onChange={changeEventHandler}
              />
            </div>
            <div>
              <Label>Description</Label>
              <Input
                type='text'
                name='description'
                value={input.description}
                onChange={changeEventHandler}
              />
            </div>
            <div>
              <Label>Website</Label>
              <Input
                type='text'
                name='website'
                value={input.website}
                onChange={changeEventHandler}
              />
            </div>
            <div>
              <Label>Location</Label>
              <Input
                type='text'
                name='location'
                value={input.location}
                onChange={changeEventHandler}
              />
            </div>
            <div>
              <Label>Logo</Label>
              <Input
                type='file'
                accept='image/*'
                // value={input.file}
                onChange={changeFileHandler}
              />
            </div>
          </div>
          {
            loading ? (<Button className="w-full my-4"><Loader2 className='animate-spin' />Please wait</Button>) : <Button type="submit" className="bg-[#6C63FF] w-full my-4 hover:bg-[#5b30a6] text-white hover:text-white">Update</Button>
          }

        </form>
      </div>
    </div>
  )
}

export default CompanySetup