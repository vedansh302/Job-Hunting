import React, { useState } from 'react'
import Navbar from '../templates/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { RadioGroup } from '../ui/radio-group'
import { Button } from '../ui/button'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { USER_API_ENDPOINT } from '@/utils/constant'
import { toast } from 'sonner'
import { useDispatch, useSelector } from 'react-redux'
import { setAuthUser, setLoading } from '@/redux/authSlice'
import store from '@/redux/store'
import { Loader2 } from 'lucide-react'
const Login = () => {
    const [input, setinput] = useState({
        email: "",
        password: "",
        role: ""
    })
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const loading = useSelector((store) => store.auth.loading)

    const changeEventHandler = (e) => {
        setinput({ ...input, [e.target.name]: e.target.value })
    }
    const changeFileHandler = (e) => {
        setinput({ ...input, file: e.target.files[0] })
    }
    const submitHandler = async (e) => {
        e.preventDefault()

        try {
            dispatch(setLoading(true))
            const res = await axios.post(`${USER_API_ENDPOINT}/login`, input, {
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials: true
            })
            if (res.data.success) {
                dispatch(setAuthUser(res.data.user))
                navigate('/')
                toast(res.data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.response.data.message)
        }
        finally {
            dispatch(setLoading(false))
        }
    }

    return (
        <div>
            <Navbar />
            <div className='flex items-center justify-center max-w-5xl mx-auto'>
                <form onSubmit={submitHandler} className='w-1/2 p-4 my-10 border-2 rounded-3xl border-gray-600'>
                    <h1 className='font-bold text-2xl mb-5'>Login</h1>
                    <div className='my-2'>
                        <Label >Email</Label>
                        <Input
                            className="my-1"
                            type="Email"
                            name="email"
                            value={input.email}
                            onChange={changeEventHandler}
                            placeholder="Enter your Email"
                        />
                    </div>

                    <div className='my-2'>
                        <Label >Password</Label>
                        <Input
                            className="my-1"
                            type="password"
                            name="password"
                            value={input.password}
                            placeholder="Enter your password"
                            onChange={changeEventHandler}
                        />
                    </div>

                    <div className='flex items-center justify-between'>
                        <RadioGroup className="flex items-center gap-4 my-1">
                            <div className='flex items-center space-x-2'>
                                <Input
                                    type="radio"
                                    name="role"
                                    value="student"
                                    checked={input.role === "student"}
                                    onChange={changeEventHandler}
                                    className="cursor-pointer"
                                />
                                <Label>Student</Label>
                            </div>
                            <div className="flex items-center space-x-2 mx-6">
                                <Input
                                    type="radio"
                                    name='role'
                                    value="recruiter"
                                    checked={input.role === "recruiter"}
                                    onChange={changeEventHandler}
                                    className="cursor-pointer"
                                />
                                <Label>Recruiter</Label>
                            </div>
                        </RadioGroup>
                    </div>
                    {
                        loading ? (<Button className="w-full my-4"><Loader2 className=' my-4 animate-spin' />Please Wait</Button>) : <Button type="submit" className="bg-[#6C63FF] w-full my-4 hover:bg-[#5b30a6] text-white hover:text-white">Login</Button>
                    }

                    <span className='text-sm '>Don't have an account? <Link to={'/signup'}>SignUp</Link></span>
                </form>
            </div>
        </div>
    )
}

export default Login