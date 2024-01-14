import React from 'react'

function About() {
  return (
    <div> 
    <div className='flex font-bold justify-center mt-2'>যোগাযোগ</div>
         <div className="border flex max-w-[1200px] flex-col items-stretch ml-96 px-5 py-6 rounded-2xl border-solid border-neutral-300 max-md:max-w-[422px] max-md:ml-28 max-sm:ml-0">
      <div className="flex justify-between gap-4 items-start">
        <img
          loading="lazy"
          srcSet="https://scontent.fjsr8-1.fna.fbcdn.net/v/t39.30808-6/419503964_1109011280117334_2554467123601528032_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeHShqAdKIZ7k4egjUrEv5QIEfSOnnl8NIYR9I6eeXw0hnBpb8-jI0MTTCPQ298UzVwCj7he1JNlSlGGQ9VuYcvR&_nc_ohc=v1cGNgUQOfYAX_I70OW&_nc_ht=scontent.fjsr8-1.fna&oh=00_AfAd1YGw5BQFpwljpM_u9istRztSxEa4jkl6-oGNooNkKw&oe=65A86B23"
          className="aspect-square object-contain object-center rounded-3xl w-[57px] overflow-hidden shrink-0 max-w-full"
        />
        <span className="flex grow basis-[0%] flex-col items-stretch mt-1">
          <span className="">
            
            <div className="justify-center text-neutral-500 text-sm font-semibold leading-4 my-auto">
            Sakib Hasan
            </div>
          </span>
          
          <div className="justify-center text-neutral-950 text-sm font-semibold leading-5 mt-4">
          <img
              loading="lazy"
              src='https://png.pngtree.com/png-vector/20201028/ourmid/pngtree-phone-icon-in-solid-circle-png-image_2380227.jpg'
              className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
            />
          01824250139
          
          </div>
        </span>
      </div>
      <div className="bg-neutral-300 flex shrink-0 h-px flex-col mt-4" />
      <div className="flex justify-between gap-4 mt-4 items-start">
        <img
          loading="lazy"
          srcSet="https://scontent.fjsr8-1.fna.fbcdn.net/v/t39.30808-6/373525621_122095530098030869_6479526858892869954_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeGbfeKjlFFRPOzMlFU02f9biI2CBQpPRTKIjYIFCk9FMu2VaHrYUgMpMnpdhC0Ddbv8nuapxLY1AIt-QSAGHmzb&_nc_ohc=l4PwaaUQYLIAX_4H6kz&_nc_ht=scontent.fjsr8-1.fna&oh=00_AfAZwx740sHMC6h7WGuHGL7HmB-70F3rbb-289a6QlKfhw&oe=65A98A5D"
          className="aspect-square object-contain object-center w-[57px] rounded-3xl overflow-hidden shrink-0 max-w-full"
        />
        <span className="flex grow basis-[0%] flex-col items-stretch mt-1">
          <span className="flex items-stretch justify-between gap-2.5">
           
            <div className="justify-center text-neutral-500 text-sm font-semibold leading-4 my-auto">
            Shaon
            </div>
          </span>
          
          <div className="justify-center text-neutral-950 text-sm font-semibold leading-5 mt-4">
          <img
              loading="lazy"
              src='https://png.pngtree.com/png-vector/20201028/ourmid/pngtree-phone-icon-in-solid-circle-png-image_2380227.jpg'
              className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
            />
          01758109596
          </div>
        </span>
      </div>
      
    </div>
    </div>
  )
}

export default About