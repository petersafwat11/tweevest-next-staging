import React from "react";
import Image from 'next/image';


export const Cta = () => {
    return (
        <div
            className="cta-main relative bg-primary-default p-[96px] rounded-24 overflow-hidden mt-[128px] mb-[100px] max-w-[1170px] mx-[auto] 2xl:max-w-[768px] lg:rounded-0 lg:max-w-[100%] lg:mt-[72px] lg:mx-[0px] lg:mb-[0px] lg:pt-[48px] lg:px-[30px] lg:pb-[72px] sm:px-[15px]"
        >
            <h2 className="heading heading-h2 text-white text-center mb-[32px]">
                New Feature Coming Soon, Stay Tuned!
            </h2>
            <form action="" className="form-main flex item-center justify-center relative z-10">
                <div className="input-otr flex border-[1px] border-white rounded-8 overflow-hidden max-w-[500px] w-[100%]">
                    <input className="input heading-S p-[16px] text-white bg-transparent placeholder:text-white" type="email" name="email" placeholder="Enter your email" />
                    <input className="theme-btn2 w-[auto] focus:outline-none rounded-[0px]" type="submit" name="submit" value={"Subscribe"} />
                </div>
            </form>
            <div className="bg-shapes-otr flex justify-between absolute left-[0px] top-[0px] w-[100%] h-[100%]">
                <Image className="cta-shape1 object-contain" width="230" height="220" src="/svg/cta-bg-shape1.svg" alt="Shape" />
                <Image className="cta-shape2 object-contain" width="230" height="220" src="/svg/cta-bg-shape2.svg" alt="Shape" />
            </div>
        </div>
    )
}