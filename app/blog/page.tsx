import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";
import ctx from "@/lib/api/api";

export default async function Blog() {

     const articles = await ctx.getAllBlogData();

     return (
          <div className="-mx-4 sm:-mx-6"><HeroParallax products={articles} /></div>
     )
}


