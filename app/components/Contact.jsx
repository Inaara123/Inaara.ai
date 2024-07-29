import React from 'react';
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Textarea } from "@/components/ui/textarea"

import { Input } from "@/components/ui/input";

const formSchema = z.object({
  username: z.string().min(2).max(50),
});

const Contact = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      phone: "",
      message: ""
    },
  });

  const onSubmit = (values) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  };

  return (
    <div className=' mb-20 mt-32 px-20'>
        <h1 className='text-6xl author-semibold'>Let&apos;s have a talk</h1>
        <p className='author-medium text-2xl text-gray-600'>Get in touch with us</p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="author-semibold text-gray-500 text-xl ">Your Name</FormLabel>
                  <FormControl>
                    <Input className=" w-1/2 placeholder:text-gray-600 placeholder:author-medium text-black author-medium rounded-xl bg-slate-200 border-none text-lg focus:bg-slate-300 " placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="author-semibold text-gray-500 text-xl ">Your Email</FormLabel>
                  <FormControl>
                    <Input className=" w-1/2 placeholder:text-gray-600 placeholder:author-medium text-black author-medium rounded-xl bg-slate-200 border-none text-lg focus:bg-slate-300" placeholder="JohnDoe@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="author-semibold text-gray-500 text-xl ">Your Contact Number</FormLabel>
                  <FormControl>
                    <Input className=" w-1/2 placeholder:text-gray-600 placeholder:author-medium text-black author-medium rounded-xl bg-slate-200 border-none text-lg focus:bg-slate-300" placeholder="(+91)-9988776655" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="author-semibold text-gray-500 text-xl ">Your Message</FormLabel>
                  <FormControl>
                    <Textarea className=" w-1/2 placeholder:text-gray-600 placeholder:author-medium text-black author-medium rounded-xl bg-slate-200 border-none text-lg focus:bg-slate-300" placeholder="Hey.. I'm interested in your project!" {...field}/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <button type='submit' className=' border-2 border-white px-4 py-1 rounded-full mt-2 relative flex gap-2 items-center justify-center overflow-hidden group'>
              <div className='relative z-10 flex items-center justify-center'>
                <h1 className='author-bold group-hover:-translate-y-10 text-lg group-hover:text-white transition-all duration-500 z-10'>Send</h1>
                <h1 className='absolute translate-y-7 group-hover:translate-y-0 author-bold text-lg group-hover:text-black transition-all duration-500 z-10'>Send</h1>
              </div>
              <div className='relative overflow-hidden z-10 flex items-center justify-center -translate-y-[1px]'>
                <h1 className='text-lg font-bold group-hover:translate-x-10 group-hover:text-white transition-all duration-500'>⪢</h1>
                <h1 className='text-lg font-bold absolute -translate-x-10 group-hover:translate-x-0 group-hover:text-black transition-all duration-500'>⪢</h1>
              </div>
              <div className='h-full w-full absolute bg-white rounded-full top-0 scale-110 -translate-x-40 group-hover:translate-x-0 transition-all duration-500'/>
            </button>
          </form>
        </Form>
    </div>
  );
}

export default Contact;
