import React from 'react'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { Label } from './ui/label'

const filterData = [
  {
    filterType: "Location",
    array: ['Delhi NCR', "Banglore", 'Hyderabadh', 'Pune', 'Mumbai']
  },
  {
    filterType: "Industry",
    array: ['FrontEnd Developer', "Backend Developer", 'Full stack Developer', 'Data Scientist', 'Graphic Designer', 'Automation Tester', 'Sales']
  },
  {
    filterType: "Salary",
    array: ['0-20k', "21-40k", '41-60k', '61-80k', '81-100k']
  }
]
const FilterCard = () => {
  return (
    <div className='w-full bg-white p-3 rounded-md'>
      <h1 className='font-bold  py-2 px-3 rounded-r-lg'>Filter Jobs</h1>
      <hr className='mt-3 bg-' />
      <RadioGroup>
        {
          filterData.map((data, index) => (
            <div>
              <h1 className='font-bold text-lg py-2 px-1 '>{data.filterType}</h1>
              {
                data.array.map((item, index) => {
                  return (
                    <div className='flex items-center space-x-2 px-1 '>
                      <RadioGroupItem value={item} />
                      <Label className="px-1">{item}</Label>
                    </div>
                  )
                })
              }
            </div>
          ))
        }
      </RadioGroup>
    </div>
  )
}

export default FilterCard