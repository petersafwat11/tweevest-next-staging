import Image from 'next/image';
import Link from 'next/link';
const LastNews = ()=>{
    return(
        <div className="px-16 py-8 my-16">
            <h3 className="pl-2 font-[700] text-[20px] leading-[80%] text-[#1C3475]">Last News</h3>
            <div className="grid grid-cols-2 md:grid-cols-1 gap-8 ">
                <div className="flex p-[10px] my-6 border-[1.5px] bg-white border-solid border-[#ECEEF1] rounded-[8px] overflow-hidden " style={{boxShadow: '0px 30px 80px rgba(15, 29, 36, 0.04'}}>
                    <div className='m-[20px]'>
                        <Image alt='image' src="/ss" width={'125'} height={'97'} />
                    </div>
                    <div className='my-10 mr-[10px]'>
                        <div className='flex'> 
                            <p className='font-semibold text-[20px] text-[#727FA4] '>Market Watch</p>
                            <span className='h-[5px] w-[5px] bg-[#B6BBC9] text-[#B6BBC9] font-black mx-1 my-4 rounded-full'></span>
                            <p className='font-semibold text-[20px] text-[#B6BBC9]'>1 hour ago</p>
                        </div>
                        <div className=''>
                            <Link href='/' className='font-semibold text-[20px] text-[#1C3475] '>Google, Netflix under scrutiny in South Korea over network fees</Link>
                        </div>
                    </div>
                </div>
                <div className="flex p-[10px] my-6 border-[1.5px] bg-white border-solid border-[#ECEEF1] rounded-[8px] overflow-hidden " style={{boxShadow: '0px 30px 80px rgba(15, 29, 36, 0.04'}}>
                    <div className='m-[20px]'>
                        <Image alt='image' src="/ss" width={'125'} height={'97'} />
                    </div>
                    <div className='my-10 mr-[10px]'>
                        <div className='flex'> 
                            <p className='font-semibold text-[20px] text-[#727FA4] '>Market Watch</p>
                            <span className='h-[5px] w-[5px] bg-[#B6BBC9] text-[#B6BBC9] font-black mx-1 my-4 rounded-full'></span>
                            <p className='font-semibold text-[20px] text-[#B6BBC9]'>1 hour ago</p>
                        </div>
                        <div className=''>
                            <Link href='/' className='font-semibold text-[20px] text-[#1C3475] '>Google, Netflix under scrutiny in South Korea over network fees</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LastNews