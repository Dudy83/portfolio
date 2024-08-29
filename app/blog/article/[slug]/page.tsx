import ctx from "@/lib/api/api";
import { notFound } from "next/navigation";
import Markdown from 'markdown-to-jsx'
import Image from "next/image";
import { cn } from "@/lib/utils";
import dayjs from 'dayjs'

interface BlogPostParams {
     params: {
          slug: string;
     }
}

export default async function BlogPost({ params }: BlogPostParams) {
     const { slug } = params;

     const post = await ctx.getBlogArticleData(slug);

     if (!post) {
          return notFound();
     }

     const colors = [
          'from-violet-500/15 via-purple-500/15 to-blue-500/15',
          'from-orange-500/15 via-amber-500/15 to-yellow-500/15',
          'from-green-400/15 via-emerald-400/15 to-teal-400/15',
          'from-sky-500/15 via-blue-500/15 to-indigo-500/30',
     ]

     return (
          <article className="w-full my-20">
               <div className="relative my-8 group">
                    <div className="relative w-full h-96 rounded-xl shadow-md overflow-hidden">
                         <Image src={post.imageUrl} fill={true} alt={post.title} objectFit="cover" />
                    </div>
                    <div className={cn("absolute inset-0 rounded-xl bg-gradient-to-b group-hover:backdrop-blur-sm", colors[Math.floor(Math.random() * colors.length)])}></div>
                    <div className="absolute inset-0 flex-center flex-col p-8">
                         <div className="bg-white/50 dark:bg-black/50 backdrop-blur-sm rounded-xl p-2 mt-32">
                              <h3 className="text-3xl font-bold bg-clip-text text-transparent text-center bg-gradient-to-r from-purple-950 to-indigo-950 dark:from-purple-50 dark:to-indigo-50">
                                   {post.summary}
                              </h3>
                         </div>
                         <div className="w-full flex justify-between mx-4 items-center mt-auto">
                              <div className="bg-white/50 dark:bg-black/50 backdrop-blur-sm rounded-xl p-1">
                                   <p className="dark:text-white text-black font-medium tracking-tighter">{post.author}</p>
                              </div>
                              <div className="bg-white/50 dark:bg-black/50 backdrop-blur-sm rounded-xl p-1">
                                   <p className="dark:text-white text-black font-medium tracking-tighter">{dayjs(post.createdAt).format('DD/MM/YYYY')}</p>
                              </div>
                         </div>

                    </div>
               </div>

               <div className="flex-center"><div className="w-full prose lg:prose-xl dark:prose-invert"><Markdown>{post.content}</Markdown></div></div>
          </article>
     );
}

