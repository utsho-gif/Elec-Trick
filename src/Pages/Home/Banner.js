import React from 'react';

const Banner = () => {
    return (
        <div class="hero min-h-screen">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img src="https://i.ibb.co/q04JG4X/2.jpg" class="max-w-sm rounded-lg shadow-2xl" alt=''/>
          <div>
            <h1 class="text-5xl font-bold">Elec-Trick</h1>
            <p class="py-6 mr-12 font-semibold">ELEC-TRICK IS A TOOLS BRAND ABOUT PROVIDING TOOLS FOR EVERY HOME. DISTRIBUTING HIGH END TOOLS TO HELP CREATE YOUR IDEAL VISION FOR A PROJECT, HOME, OR APPLICATION. WE ARE YOUR PARTNERS, CONFIDANTS AND MOST IMPORTANTLY YOUR GUIDANCE TO HELP YOU COMPLETE PROJECTS THAT MATTER.</p>
            <button class="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;