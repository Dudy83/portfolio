import React, { useRef, useState, forwardRef, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { motion } from "framer-motion";
import { IconUpload } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

const FileUpload = forwardRef<HTMLInputElement, { onChange: (files: File[]) => void; reset: boolean }>(
     ({ onChange, reset }, ref) => {
          const [files, setFiles] = useState<File[]>([]);
          const fileInputRef = useRef<HTMLInputElement | null>(null);

          useEffect(() => {
               if (reset) {
                    setFiles([]); // Clear the files state when resetTrigger changes
               }
          }, [reset]);


          const handleFileChange = (newFiles: File[]) => {
               setFiles((prevFiles) => [...prevFiles, ...newFiles]);
               onChange && onChange(newFiles);
          };

          const handleClick = () => {
               if (fileInputRef.current) {
                    fileInputRef.current.click();
               }
          };

          const { getRootProps, getInputProps, isDragActive } = useDropzone({
               accept: { 'image/*': [] },
               multiple: false,
               noClick: true,
               onDrop: handleFileChange,
               onDropRejected: (error) => {
                    console.log(error);
               },
          });

          return (
               <div className="w-full max-w-4xl mx-auto border border-dashed bg-gray-50 dark:bg-zinc-800 shadow-input rounded-md focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600 border-neutral-200 dark:border-neutral-600" {...getRootProps()}>
                    <motion.div
                         onClick={handleClick}
                         whileHover="animate"
                         className="p-10 group/file block rounded-lg cursor-pointer w-full relative overflow-hidden"
                    >
                         <input
                              {...getInputProps()}
                              ref={(node) => {
                                   // Bind the ref to both the internal ref and the forwarded ref
                                   fileInputRef.current = node;
                                   if (typeof ref === "function") {
                                        ref(node);
                                   } else if (ref) {
                                        ref.current = node;
                                   }
                              }}
                              id="file-upload-handle"
                              type="file"
                              onChange={(e) => handleFileChange(Array.from(e.target.files || []))}
                              className="hidden"
                         />

                         <div className="flex flex-col items-center justify-center">
                              <div className="relative w-full max-w-xl mx-auto">
                                   {files.length > 0 &&
                                        files.map((file, idx) => (
                                             <motion.div
                                                  key={"file" + idx}
                                                  layoutId={idx === 0 ? "file-upload" : "file-upload-" + idx}
                                                  className={cn(
                                                       "relative overflow-hidden z-40 bg-white dark:bg-neutral-900 flex flex-col items-start justify-start md:h-24 p-4 mt-4 w-full mx-auto rounded-md",
                                                       "shadow-sm"
                                                  )}
                                             >
                                                  <div className="flex justify-between w-full items-center gap-4">
                                                       <motion.p
                                                            initial={{ opacity: 0 }}
                                                            animate={{ opacity: 1 }}
                                                            layout
                                                            className="text-base text-neutral-700 dark:text-neutral-300 truncate max-w-xs"
                                                       >
                                                            {file.name}
                                                       </motion.p>
                                                       <motion.p
                                                            initial={{ opacity: 0 }}
                                                            animate={{ opacity: 1 }}
                                                            layout
                                                            className="rounded-lg px-2 py-1 w-fit flex-shrink-0 text-sm text-neutral-600 dark:bg-neutral-800 dark:text-white shadow-input"
                                                       >
                                                            {(file.size / (1024 * 1024)).toFixed(2)} MB
                                                       </motion.p>
                                                  </div>

                                                  <div className="flex text-sm md:flex-row flex-col items-start md:items-center w-full mt-2 justify-between text-neutral-600 dark:text-neutral-400">
                                                       <motion.p
                                                            initial={{ opacity: 0 }}
                                                            animate={{ opacity: 1 }}
                                                            layout
                                                            className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 "
                                                       >
                                                            {file.type}
                                                       </motion.p>

                                                       <motion.p
                                                            initial={{ opacity: 0 }}
                                                            animate={{ opacity: 1 }}
                                                            layout
                                                       >
                                                            modified {new Date(file.lastModified).toLocaleDateString()}
                                                       </motion.p>
                                                  </div>
                                             </motion.div>
                                        ))}
                                   {!files.length && (
                                        <motion.div
                                             layoutId="file-upload"
                                             variants={{
                                                  initial: { x: 0, y: 0 },
                                                  animate: { x: 20, y: -20, opacity: 0.9 },
                                             }}
                                             transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                             className={cn(
                                                  "relative group-hover/file:shadow-2xl z-40 bg-white dark:bg-neutral-900 flex items-center justify-center h-32 w-full max-w-[8rem] mx-auto rounded-md",
                                                  "shadow-[0px_10px_50px_rgba(0,0,0,0.1)]"
                                             )}
                                        >
                                             {isDragActive ? (
                                                  <motion.p
                                                       initial={{ opacity: 0 }}
                                                       animate={{ opacity: 1 }}
                                                       className="text-neutral-600 flex flex-col items-center"
                                                  >
                                                       Drop it
                                                       <IconUpload className="h-4 w-4 text-neutral-600 dark:text-neutral-400" />
                                                  </motion.p>
                                             ) : (
                                                  <IconUpload className="h-4 w-4 text-neutral-600 dark:text-neutral-300" />
                                             )}
                                        </motion.div>
                                   )}

                                   {!files.length && (
                                        <motion.div
                                             variants={{
                                                  initial: { opacity: 0 },
                                                  animate: { opacity: 1 },
                                             }}
                                             className="absolute opacity-0 border border-dashed border-sky-400 inset-0 z-30 bg-transparent flex items-center justify-center h-32 w-full max-w-[8rem] mx-auto rounded-md"
                                        ></motion.div>
                                   )}
                              </div>
                         </div>
                    </motion.div>
               </div>
          );
     }
);

export function GridPattern() {
     const columns = 41;
     const rows = 11;
     return (
          <div className="flex bg-gray-100 dark:bg-neutral-900 flex-shrink-0 flex-wrap justify-center items-center gap-x-px gap-y-px  scale-105">
               {Array.from({ length: rows }).map((_, row) =>
                    Array.from({ length: columns }).map((_, col) => {
                         const index = row * columns + col;
                         return (
                              <div
                                   key={`${col}-${row}`}
                                   className={`w-10 h-10 flex flex-shrink-0 rounded-[2px] ${index % 2 === 0
                                        ? "bg-gray-50 dark:bg-neutral-950"
                                        : "bg-gray-50 dark:bg-neutral-950 shadow-[0px_0px_1px_3px_rgba(255,255,255,1)_inset] dark:shadow-[0px_0px_1px_3px_rgba(0,0,0,1)_inset]"
                                        }`}
                              />
                         );
                    })
               )}
          </div>
     );
}

FileUpload.displayName = "FileUpload";

export { FileUpload };
