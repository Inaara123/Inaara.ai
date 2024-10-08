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
  email: z.string().email(),
  phone: z.string().min(10),
  message: z.string().min(5)
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
    console.log('Form submitted with values:', values);
    // Google Form ID and Entry IDs (replace these with actual values from your Google Form)
    const formID = "1FAIpQLSetj0jd633jaOQ-vqKK1XF_hNGJA-5uxAxhbZhKiotdzIAACw";
const formActionURL = `https://docs.google.com/forms/d/e/${formID}/formResponse`;

    const formData = new FormData();
    // Add the form data using the entry numbers for each field
    formData.append("entry.1094000378", values.username);  // Replace with your form's name entry ID
    formData.append("entry.118812642", values.email);     // Replace with your form's email entry ID
    formData.append("entry.1291164660", values.phone);     // Replace with your form's phone entry ID
    formData.append("entry.721846168", values.message);   // Replace with your form's message entry ID
    console.log("username is ,",values.email);
    // Use fetch to send a POST request to the Google Form
    fetch(formActionURL, {
      method: "POST",
      body: formData,
      mode: "no-cors", // This is important to avoid CORS issues
    })
    .then(() => {
      console.log('Form submitted successfully!');
      alert('Form submitted successfully!');
    })
    .catch((error) => {
      console.error('Error submitting form:', error);
      alert('Server error occured');
    });
  };
  const handleFormSubmit = (event) => {
    console.log('handling submit');
    event.preventDefault(); // Prevent the default form submission
    form.handleSubmit(onSubmit)(event); // Call the handleSubmit method with the onSubmit function
    onsubmit(event);
  };
  return (
    <div className='mb-20 mt-32 px-4 sm:px-8 md:px-16 lg:px-20'>
      <h1 className='text-4xl sm:text-5xl md:text-6xl'>Let&apos;s have a talk</h1>
      <p className='text-lg sm:text-xl md:text-2xl text-gray-600'>Get in touch with us</p>
      <form onSubmit={handleFormSubmit} className="space-y-4">
        <div>
          <label className="author-semibold text-gray-500 text-lg sm:text-xl">Your Name</label>
          <Input
            className="w-full sm:w-3/4 md:w-1/2 placeholder:text-gray-600 placeholder:author-medium text-black author-medium rounded-xl bg-slate-200 border-none text-base sm:text-lg focus:bg-slate-300"
            placeholder="John Doe"
            {...form.register("username")}
          />
        </div>
        <div>
          <label className="author-semibold text-gray-500 text-lg sm:text-xl">Your Email</label>
          <Input
            className="w-full sm:w-3/4 md:w-1/2 placeholder:text-gray-600 placeholder:author-medium text-black author-medium rounded-xl bg-slate-200 border-none text-base sm:text-lg focus:bg-slate-300"
            placeholder="JohnDoe@example.com"
            {...form.register("email")}
          />
        </div>
        <div>
          <label className="author-semibold text-gray-500 text-lg sm:text-xl">Your Contact Number</label>
          <Input
            className="w-full sm:w-3/4 md:w-1/2 placeholder:text-gray-600 placeholder:author-medium text-black author-medium rounded-xl bg-slate-200 border-none text-base sm:text-lg focus:bg-slate-300"
            placeholder="(+91)-9988776655"
            {...form.register("phone")}
          />
        </div>
        <div>
          <label className="author-semibold text-gray-500 text-lg sm:text-xl">Your Message</label>
          <Textarea
            className="w-full sm:w-3/4 md:w-1/2 placeholder:text-gray-600 placeholder:author-medium text-black author-medium rounded-xl bg-slate-200 border-none text-base sm:text-lg focus:bg-slate-300"
            placeholder="Hey.. I'm interested in your project!"
            {...form.register("message")}
          />
        </div>
        <button type='submit' className='border-2 border-white px-4 py-1 rounded-full mt-2 relative flex gap-2 items-center justify-center overflow-hidden group' >
          <div className='relative z-10 flex items-center justify-center'>
            <h1 className='author-bold group-hover:-translate-y-10 text-base sm:text-lg group-hover:text-white transition-all duration-500 z-10'>Send</h1>
            <h1 className='absolute translate-y-7 group-hover:translate-y-0 author-bold text-base sm:text-lg group-hover:text-black transition-all duration-500 z-10'>Send</h1>
          </div>
          <div className='relative overflow-hidden z-10 flex items-center justify-center -translate-y-[1px]'>
            <h1 className='text-base sm:text-lg font-bold group-hover:translate-x-10 group-hover:text-white transition-all duration-500'>⪢</h1>
            <h1 className='text-base sm:text-lg font-bold absolute -translate-x-10 group-hover:translate-x-0 group-hover:text-black transition-all duration-500'>⪢</h1>
          </div>
  <div className='h-full w-full absolute bg-white rounded-full top-0 scale-110 -translate-x-40 group-hover:translate-x-0 transition-all duration-500' />
        </button>
      </form>
    </div>
  );
}

export default Contact;
