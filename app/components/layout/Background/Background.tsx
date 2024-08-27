"use client";

import React from "react";

const Background = () => {

     return (
          <div className="h-screen fixed w-full overflow-hidden flex flex-col items-center justify-center rounded-lg">
               <div className="w-full h-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
                    <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">
                    </div>
               </div>
          </div>
     );
};

export default Background;
