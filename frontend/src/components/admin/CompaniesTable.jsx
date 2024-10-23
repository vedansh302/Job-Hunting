import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Avatar, AvatarImage } from '../ui/avatar'
import { Popover, PopoverContent } from '../ui/popover'
import { Edit2, MoreHorizontal } from 'lucide-react'
import { PopoverTrigger } from '@radix-ui/react-popover'

const CompaniesTable = () => {
  return (
    <div>
      <Table>
        <TableCaption>A list of Companies</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Logo</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableCell>
            <Avatar>
              <AvatarImage
                src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt="@shadcn" />
            </Avatar>
          </TableCell>
          <TableCell>Company Name</TableCell>
          <TableCell>10/20/24</TableCell>
          <TableCell className="text-right cursor-pointer">
            <Popover>
              <PopoverTrigger><MoreHorizontal /></PopoverTrigger>
              <PopoverContent className='w-32'>
                <div className='flex items-center gap-2 w-fit cursor-pointer'>
                  <Edit2 className='w-4' />
                  <span>Edit</span>
                </div>
              </PopoverContent>
            </Popover>
          </TableCell>
        </TableBody>
      </Table>
    </div>
  )
}

export default CompaniesTable