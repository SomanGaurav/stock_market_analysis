import { useState } from "react" ; 
import {zodResolver} from "@hookform/resolvers/zod"; 
import {useForm} from "react-hook-form" ; 

import { Button } from "@/components/ui/button" ; 
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"; 

import {z} from "zod"; 

const formSchema = z.object({
  firstName : z.string().max(20).optional() , 
  lastName  : z.string().max(20).optional() , 
  email : z.string().email({message : "Enter a valid Email"}), 
  password : z.string().min(6 , {message : "Password must be atleast 6 characters"})
}); 

const LoginPage = () => {
  const[authType , setAuthType] = useState("sign-up"); 
  const form  = useForm<z.infer<typeof formSchema>>({
    resolver : zodResolver(formSchema), 
    defaultValues : {
      firstName : "" , 
      lastName : "" , 
      email : "",
      password : ""
    }
  }); 

  const onSubmit = (values : z.infer<typeof formSchema>) => {
    console.log(values); 
  }
  return (
    <div className="flex bg-[#131517] h-screen w-screen">
        <div className=" h-screen w-[60%] bg-amber-100">
        </div>

        <div className="flex flex-col justify-center items-center h-full w-[40%]">
            <h1 className="text-white font-bold mb-5">{authType === "log-in" ? "Welcome Back!" : "Welcome!"}</h1>
            <div className="w-fit ">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {authType === "sign-up" && (
                  <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white text-xl ml-1">First Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Full Name" {...field} className="w-xs h-10 font-bold "/>
                    </FormControl>
                    <FormMessage /> 
                  </FormItem>
                  )}
                />
                
                )}
                {authType === "sign-up" && (
                  <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white text-xl ml-1">Last Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Last Name" {...field} className="w-xs h-10 font-bold "/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                  )}
                />
                
                )}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white text-xl ml-1">Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Email" {...field} className="w-xs h-10 font-bold "/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white text-xl ml-1">Password</FormLabel>
                    <FormControl>
                      <Input placeholder="Password" {...field} className="w-xs h-10 font-bold "/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                  )}
                />
                
                <Button type="submit" className="bg-white text-black hover:text-white">Submit</Button>
                </form>
              </Form>
              {authType === "sign-up" && (
                <span onClick={() => {setAuthType("log-in")}} className="text-xs text-blue-300 hover:cursor-pointer">Already have an account</span>
              )}
              {authType === "log-in" && (
                <span onClick={() => {setAuthType("sign-up")}} className="text-xs text-blue-300 hover:cursor-pointer" >Don't have an account</span>
              )}
            </div>
        </div>
    </div>
  )
}

export default LoginPage