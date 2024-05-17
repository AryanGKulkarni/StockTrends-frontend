/* eslint-disable react/no-unescaped-entities */
"use client";
import React from 'react'
import { z } from "zod"
import { useForm, Controller} from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"
import { Card } from '@/components/ui/card';
import { SignupAPI } from '@/helpers/api';
import { cookies } from 'next/headers';
import Cookies from "js-cookie";
import { useRouter } from 'next/navigation'

const FormSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    password: z.string().min(6, {
        message: "Password must be at least 6 characters.",
    }),
    first_name: z.string().min(1, {
        message: "Name is required.",
    }),
    email: z.string().email({
        message: "Invalid email address.",
    }),
})

type FormSchemaType = z.infer<typeof FormSchema>

const SignUpForm = () => {
    const router = useRouter();
    const form = useForm<FormSchemaType>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            username: "",
            password: "",
            first_name: "",
            email: "",
        },
    })

    const Postdata = async (data: FormSchemaType)=>{
        const res = await SignupAPI(data)
        if(res.status==200){
            Cookies.set("accessToken", res.token)
            toast({
                title: "Signed in succesfully",
              })
            router.push('/')  
        }
        else{
            toast({
                title: "Username already exists",
                variant: "destructive"
              })
        }
    }

    function onSubmit(data: FormSchemaType) {
        // console.log(JSON.stringify(data, null, 2))
        Postdata(data) 
    }

    return (
        <div className='w-2/5'>
            <Card className='flex justify-center py-3' style={{ backgroundColor:"#232323"}}>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="w-3/4 space-y-6">
                        <FormField
                            control={form.control}
                            name="username"
                            render={({ field }: any) => (
                                <FormItem>
                                    <FormLabel>Username</FormLabel>
                                    <FormControl>
                                        <Input style={{ backgroundColor:"#111111"}} placeholder="shadcn" {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }: any) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input style={{ backgroundColor:"#111111"}} type="password" placeholder="••••••••" {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="first_name"
                            render={({ field }: any) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input style={{ backgroundColor:"#111111"}} placeholder="John Doe" {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }: any) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input style={{ backgroundColor:"#111111"}} type="email" placeholder="example@mail.com" {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <Button type='submit'>Submit</Button>
                    </form>
                </Form>
            </Card>
        </div>
    )
}

export default SignUpForm