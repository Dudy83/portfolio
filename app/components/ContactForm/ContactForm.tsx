"use client";
import React, { useState } from "react";
import { Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/text-area";
import { PhoneInput } from "@/components/ui/phone-input";
import { FileUpload } from "@/components/ui/file-upload";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import {
     Form,
     FormControl,
     FormField,
     FormItem,
     FormLabel,
     FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { isValidPhoneNumber } from "react-phone-number-input";
import { z } from "zod";
import { toast } from "../ui/use-toast";
import { Boxes } from "../ui/background-boxes";

const FormSchema = z.object({
     firstname: z
          .string()
          .min(2, { message: "Firstname must be at least 2 characters long" })
          .max(50, { message: "Firstname must be less than 50 characters" }),
     lastname: z
          .string()
          .min(2, { message: "Lastname must be at least 2 characters long" })
          .max(50, { message: "Lastname must be less than 50 characters" }),
     phone: z
          .string()
          .refine(isValidPhoneNumber, { message: "Invalid phone number" }),
     message: z
          .string()
          .min(10, { message: "Message must be at least 10 characters long" })
          .max(100, { message: "Message must be less than 100 characters" }),
     images: typeof window !== 'undefined' ? z.array(z.instanceof(File)).max(1, { message: "You can upload up to 1 image" }) : z.array(z.any()),
});

export default function ContactForm() {
     const [submitted, setSubmitted] = useState(false);
     const [reset, setReset] = useState(false);


     const form = useForm<z.infer<typeof FormSchema>>({
          resolver: zodResolver(FormSchema),
          defaultValues: {
               firstname: "", // Adding firstname default value
               lastname: "",  // Adding lastname default value
               message: "",
               phone: "",     // Keeping phone default value
               images: [],    // Adding images default value (empty array)
          },
     });

     const onSubmit = async (data: z.infer<typeof FormSchema>) => {
          setSubmitted(true);
          setReset(false);

          try {
               const formData = new FormData();

               // Append form data
               formData.append("firstname", data.firstname);
               formData.append("lastname", data.lastname);
               formData.append("phone", data.phone);
               formData.append("message", data.message);

               // Append image if available
               if (data.images && data.images[0]) {
                    formData.append("images", data.images[0]);
               }

               // Send the form data to the API
               const response = await fetch("/api/contact", {
                    method: "POST",
                    body: formData,
               });

               if (response.ok) {
                    form.reset();
                    setReset(true);


                    toast({
                         title: "Your message has been sent.",
                    });
               } else {
                    toast({
                         variant: "destructive",
                         title: "Uh oh! Something went wrong.",
                    });
               }
          } catch (error) {
               console.error(error);
               toast({
                    variant: "destructive",
                    title: "Uh oh! Something went wrong.",
               });
          } finally {
               setSubmitted(false);
          }
     };

     return (
          <div>
               <BackgroundGradient isRounded={true} className="bg-white dark:bg-black m-[1px] rounded-3xl">
                    <div className="w-full dark:bg-black bg-white mx-auto rounded-3xl p-4 md:p-8 pt-[62px] md:!pt-[125px] ">
                         <Form {...form}>
                              <form className="my-8" onSubmit={form.handleSubmit(onSubmit)}>
                                   <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                                        <FormField
                                             control={form.control}
                                             name="firstname"
                                             render={({ field }) => (
                                                  <FormItem className="flex flex-col space-y-2 w-full">
                                                       <FormLabel className="text-left">First name</FormLabel>
                                                       <FormControl className="w-full">
                                                            <Input id="firstname" placeholder="Tyler" type="text" {...field} />
                                                       </FormControl>
                                                       <FormMessage />
                                                  </FormItem>
                                             )}
                                        />

                                        <FormField
                                             control={form.control}
                                             name="lastname"
                                             render={({ field }) => (
                                                  <FormItem className="flex flex-col space-y-2 w-full">
                                                       <FormLabel className="text-left">Last name</FormLabel>
                                                       <FormControl className="w-full">
                                                            <Input id="lastname" placeholder="Durden" type="text" {...field} />
                                                       </FormControl>
                                                       <FormMessage />
                                                  </FormItem>
                                             )}
                                        />
                                   </div>

                                   <FormField
                                        control={form.control}
                                        name="phone"
                                        render={({ field }) => (
                                             <FormItem className="mb-4">
                                                  <FormLabel className="text-left">Phone</FormLabel>
                                                  <FormControl className="w-full">
                                                       <PhoneInput placeholder="Enter a phone number" {...field} />
                                                  </FormControl>
                                                  <FormMessage />
                                             </FormItem>
                                        )}
                                   />

                                   <FormField
                                        control={form.control}
                                        name="message"
                                        render={({ field }) => (
                                             <FormItem className="mb-4">
                                                  <FormLabel className="text-left">Message</FormLabel>
                                                  <FormControl className="w-full">
                                                       <Textarea id="message" placeholder=""  {...field} />
                                                  </FormControl>
                                                  <FormMessage />
                                             </FormItem>
                                        )}
                                   />

                                   <FormField
                                        control={form.control}
                                        name="images"
                                        render={({ field }) => (
                                             <FormItem className="mb-4">
                                                  <FormLabel className="text-left">Image(s)</FormLabel>
                                                  <FormControl className="w-full">
                                                       <FileUpload reset={reset} {...field} />
                                                  </FormControl>
                                                  <FormMessage />
                                             </FormItem>
                                        )}
                                   />

                                   <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

                                   <button
                                        disabled={submitted}
                                        className="flex-center bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                                        type="submit"
                                   >
                                        {submitted && <Loader2 className="mr-2 h-6 w-6 animate-spin" />}

                                        <p>Envoyer</p>
                                        <BottomGradient />
                                   </button>
                              </form>
                         </Form>
                    </div>
               </BackgroundGradient>
          </div>

     );
}

const BottomGradient = () => {
     return (
          <>
               <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
               <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
          </>
     );
};
