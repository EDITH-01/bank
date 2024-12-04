import React from 'react'
import { Form, FormControl, FormField, FormLabel, FormMessage } from './form'
import { Input } from "@/components/ui/input"

interface CustomInput{
   form: typeof Form,
   name: string,
   label: string,
   placeholder: string
}
const CustomInput = ({form, name, label, placeholder } :) => {
  return (
    <FormField
          control={form.control}
          name={name}
          render={({ field }) => (
            <div className='form-item'>
                <FormLabel className='form-label'>
                    {label}
                </FormLabel>
                <div className='flex w-full flex-col'>
                  <FormControl>
                    <Input 
                    placeholder={placeholder}
                    className='input-class'
                     {...field}/>
                  </FormControl>
                  <FormMessage className='form-message mt-2' />
                </div>
            </div>
            )}
            />
  )
}

export default CustomInput