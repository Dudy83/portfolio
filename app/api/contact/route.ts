// app/api/contact/route.ts (for App Router)
import { NextResponse } from "next/server";
import fs from "node:fs/promises";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/api/api";
import mailjet from 'node-mailjet';
import { Buffer } from "buffer"; // Import Buffer from Node.js

export async function POST(req: Request) {
     try {
          const formData = await req.formData();

          // Extract form data
          const firstname = formData.get("firstname") as string;
          const lastname = formData.get("lastname") as string;
          const phone = formData.get("phone") as string;
          const message = formData.get("message") as string;

          // Handle file upload
          const file = formData.get("images") as File | null;
          let attachment = null;

          if (file) {
               const arrayBuffer = await file.arrayBuffer();
               const buffer = Buffer.from(arrayBuffer); // Properly create a Buffer from the ArrayBuffer
               const filePath = `./public/uploads/${file.name}`;

               // Save the file to the local filesystem
               await fs.writeFile(filePath, buffer);

               // Prepare attachment data
               attachment = {
                    ContentType: file.type,
                    Filename: file.name,
                    Base64Content: buffer.toString('base64'), // Correctly convert the buffer to a base64 string
               };
          }

          // Save contact data to the database
          const contact = await prisma.contact.create({
               data: {
                    firstname,
                    lastname,
                    phone,
                    message,
                    imageUrl: attachment ? `/uploads/${file!.name}` : null,
               },
          });

          // Revalidate the cache if needed
          revalidatePath("/");

          // Configure Mailjet
          const mailjetClient = mailjet.apiConnect(
               process.env.MAILJET_API_KEY || "9350fcab3c8139e2eb19f532d0b046cc",
               process.env.MAILJET_API_SECRET || "069c9b793b5b4831fe4230f2501de169"
          );

          // Craft the email
          const emailData = {
               Messages: [
                    {
                         From: {
                              Email: "guillaume.zehren@live.fr",
                              Name: "Guillaume ZEHREN",
                         },
                         To: [
                              {
                                   Email: "guigui.zed@gmail.com",
                                   Name: "Guillaume ZEHREN",
                              },
                         ],
                         Subject: "Portfolio Contact Submission",
                         TextPart: `New contact submission from ${firstname} ${lastname}. Phone: ${phone}. Message: ${message}`,
                         HTMLPart: `
                        <h3>Contact Details</h3>
                        <p><strong>First Name:</strong> ${firstname}</p>
                        <p><strong>Last Name:</strong> ${lastname}</p>
                        <p><strong>Phone:</strong> ${phone}</p>
                        <p><strong>Message:</strong> ${message}</p>
                    `,
                         Attachments: attachment
                              ? [
                                   {
                                        ContentType: attachment.ContentType,
                                        Filename: attachment.Filename,
                                        Base64Content: attachment.Base64Content,
                                   },
                              ]
                              : [],
                    },
               ],
          };

          // Send the email using Mailjet
          await mailjetClient
               .post("send", { version: "v3.1" })
               .request(emailData);

          return NextResponse.json({ success: true, contact });
     } catch (error) {
          console.error(error);
          return NextResponse.json(
               { success: false, error: "Something went wrong" },
               { status: 500 }
          );
     }
}
