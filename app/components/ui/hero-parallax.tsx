"use client";
import React from "react";
import {
     motion,
     useScroll,
     useTransform,
     useSpring,
     MotionValue,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Blog } from "@prisma/client";
import { Highlight } from "@/components/ui/hero-highlight";

interface HeroParallaxProps {
     products: Blog[]
}

export const HeroParallax = ({
     products,
}: HeroParallaxProps) => {
     const firstRow = products.slice(0, 5);
     const secondRow = products.slice(5, 10);
     const thirdRow = products.slice(10, 15);
     const ref = React.useRef(null);
     const { scrollYProgress } = useScroll({
          target: ref,
          offset: ["start start", "end start"],
     });

     const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

     const translateX = useSpring(
          useTransform(scrollYProgress, [0, 1], [0, 1000]),
          springConfig
     );
     const translateXReverse = useSpring(
          useTransform(scrollYProgress, [0, 1], [0, -1000]),
          springConfig
     );
     const rotateX = useSpring(
          useTransform(scrollYProgress, [0, 0.2], [15, 0]),
          springConfig
     );
     const opacity = useSpring(
          useTransform(scrollYProgress, [0, 0.5], [0.5, 1]),
          springConfig
     );
     const rotateZ = useSpring(
          useTransform(scrollYProgress, [0, 0.2], [20, 0]),
          springConfig
     );
     const translateY = useSpring(
          useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
          springConfig
     );
     return (
          <div
               ref={ref}
               className="h-[300vh] py-40 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
          >
               <Header />
               <motion.div
                    style={{
                         rotateX,
                         rotateZ,
                         translateY,
                         opacity,
                    }}
                    className=""
               >
                    <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
                         {firstRow.map((product) => (
                              <ProductCard
                                   product={product}
                                   translate={translateX}
                                   key={product.summary}
                              />
                         ))}
                    </motion.div>
                    <motion.div className="flex flex-row  mb-20 space-x-20 ">
                         {secondRow.map((product) => (
                              <ProductCard
                                   product={product}
                                   translate={translateXReverse}
                                   key={product.summary}
                              />
                         ))}
                    </motion.div>
                    <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
                         {thirdRow.map((product) => (
                              <ProductCard
                                   product={product}
                                   translate={translateX}
                                   key={product.summary}
                              />
                         ))}
                    </motion.div>
               </motion.div>
          </div>
     );
};

export const Header = () => {
     return (
          <div className="container mx-auto py-16 md:py-32 px-4 relative w-full z-10 pointer-events-none">
               <h1 className="hover-text-gradient active-text-gradient !leading-[unset] tracking-tighter transition-all duration-300 text-5xl lg:text-7xl">
                    <Highlight className="text-white px-4">
                         Le Blog
                    </Highlight>
               </h1>


               <p className="max-w-2xl text-lg md:text-xl mt-6 dark:text-neutral-200 font-medium">
                    Chaque projet est une opportunité de concevoir des expériences numériques engageantes, centrées sur l'utilisateur,
                    et de partager ma passion pour l'innovation et le développement web.
               </p>
          </div>

     );
};

export const ProductCard = ({
     product,
     translate,
}: {
     product: Blog;
     translate: MotionValue<number>;
}) => {
     return (
          <motion.div
               style={{
                    x: translate,
               }}
               whileHover={{
                    y: -20,
               }}
               key={product.title}
               className="group/product h-96 w-[30rem] relative flex-shrink-0"
          >
               <Link
                    href={'/blog/article/' + product.slug}
                    className="block group-hover/product:shadow-2xl "
               >
                    <Image
                         src={product.imageUrl}
                         height="600"
                         width="600"
                         className="object-cover object-left-top absolute h-full w-full inset-0"
                         alt={product.title}
                    />
               </Link>
               <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
               <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
                    {product.summary}
               </h2>
          </motion.div>
     );
};
