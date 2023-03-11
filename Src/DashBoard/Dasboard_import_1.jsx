import React from 'react'

import { useForm } from 'react-hook-form';

export default function Form() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = data => console.log(data);

    // console.log(watch('username'));
    
  return (
    <section>
        <div className="register">
            <div className="col-1">
                <h2>Enter Your Data</h2>

                <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" {...register("Name")} placeholder='Name' />
                    <input type="number" {...register("Roll No")} placeholder='RollNo' />
                    <input type="text" {...register("Address")} placeholder='Address' />
                    <input type="text" {...register("Institute")} placeholder='Institute' />
                    <input type="text" {...register("Course")} placeholder='Course' />
                    <button className='btn'>Sign In</button>
                </form>

            </div>
        </div>
    </section>
  )
}