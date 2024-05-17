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

const FormSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    password: z.string().min(6, {
        message: "Password must be at least 6 characters.",
    }),
})

type FormSchemaType = z.infer<typeof FormSchema>

const LoginForm = () => {
    const form = useForm<FormSchemaType>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            username: "",
            password: "",
        },
    })

    function onSubmit(data: FormSchemaType) {
        toast({
            title: "You submitted the following values:",
            description: (
              <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                <code className="text-white">{JSON.stringify(data, null, 2)}</code>
              </pre>
            ),
          })
        console.log(JSON.stringify(data, null, 2))
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
                        <Button type='submit'>Submit</Button>
                    </form>
                </Form>
            </Card>
        </div>
    )
}

export default LoginForm