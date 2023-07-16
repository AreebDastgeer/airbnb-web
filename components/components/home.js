import Image from 'next/image'
import React from 'react';

function Home() {
  return (
    <div className=" bg-white">
      <div className="relative h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] ">
      <div className='block overflow-hidden absolute top-0 left-0 bottom-0 right-0 box-border m-0' >
    <Image className="object-cover" src="/assests/image.webp" alt="No Img..." width={100} height={300} layout="responsive" quality={100} style={{ width: '100%' }} />
  </div>
  <div className="absolute max-[400px]:top-1/3 top-1/2 w-full text-center">
  <p className="text-black text-sm sm:text-lg">Not sure where to go? Perfect.</p>
  <button className="text-purple-500 bg-white px-5 py-2 md:px-10 md:py-4 shadow-md  rounded-full font-bold my-1 md:my-3 hover:shadow-xl active:scale-90  transition duration-150">I am flexible
  </button>
  </div>
</div>

      <main className="max-w-7xl mx-auto px-8 md:px-16 text-black">
        <section className="pt-6">
          <h2 className="text-3xl md:text-4xl font-semibold pb-5 text-black p-2">Explore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            <div className="flex items-center space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition-transform duration-200 ease-out">
              <div className="relative h-16 w-16">
                <Image className="rounded-lg" alt="No Img..." width={100} height={300} src="/assests/1st.webp" style={{ width: '100%' }} />
              </div>
              <div>
                <h2>London</h2>
                <h3>45-minute drive</h3>
              </div>
            </div>

            <div className="flex items-center space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition-transform duration-200 ease-out">
              <div className="relative h-16 w-16">
                <Image className=" rounded-lg" alt="No Img..." width={100} height={300} src="/assests/4th.webp"
                  style={{ width: '100%' }}

                ></Image>
              </div>

              <div>
                <h2>Manchester</h2>
                <h3>4.5-hour drive</h3>
              </div>
            </div>


            <div className="flex items-center space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition-transform duration-200 ease-out">
              <div className="relative h-16 w-16">
                <Image className=" rounded-lg" alt="No Img..." width={100} height={300} src="/assests/7th.webp"
                  style={{ width: '100%' }}    ></Image>



              </div>

              <div>
                <h2>Liverpool</h2>
                <h3>4.5-hour drive</h3>
              </div>
            </div>

            <div className="flex items-center space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition-transform duration-200 ease-out">
              <div className="relative h-16 w-16">
                <Image className=" rounded-lg" alt="No Img..." width={100} height={300} src="/assests/2nd.webp"

                  style={{ width: '100%' }}    ></Image>
              </div>
              <div>
                <h2>York</h2>
                <h3>4-hour drive</h3>
              </div>
            </div>

            <div className="flex items-center space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition-transform duration-200 ease-out">
              <div className="relative h-16 w-16">
                <Image className=" rounded-lg" alt="No Img..." width={100} height={300} src="/assests/5th.webp"

                  style={{ width: '100%' }}  ></Image>



              </div>

              <div>
                <h2>Cardiff</h2>
                <h3>45-minute drive</h3>
              </div>
            </div>

            <div className="flex items-center space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition-transform duration-200 ease-out">
              <div className="relative h-16 w-16">
                <Image className=" rounded-lg" alt="No Img..." width={100} height={300} src="/assests/8th.webp"
                  style={{ width: '100%' }}  ></Image>


              </div>

              <div>
                <h2>Birkenhead</h2>
                <h3>4.5-hour drive</h3>
              </div>
            </div>

            <div className="flex items-center space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition-transform duration-200 ease-out">
              <div className="relative h-16 w-16">
                <Image className=" rounded-lg" alt="No Img..." width={100} height={300} src="/assests/3rd.webp"
                  style={{ width: '100%' }}  ></Image>


              </div>

              <div>
                <h2>Newquay</h2>
                <h3>6-hour drive</h3>
              </div>
            </div>

            <div className="flex items-center space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition-transform duration-200 ease-out">
              <div className="relative h-16 w-16">
                <Image className=" rounded-lg" alt="No Img..." width={100} height={300} src="/assests/6th.webp"
                  style={{ width: '100%' }}  ></Image>
              </div>

              <div>
                <h2>Hove</h2>
                <h3>2-hour drive</h3>
              </div>
            </div>
          </div>
        </section>
        <section>
          <h2 className="text-3xl md:text-4xl font-semibold py-8">Live Anywhere</h2>
          <div className="flex space-x-3 p-3 -ml-3 overflow-x-auto overflow-y-hidden no-scrollbar">
            <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
              <div className="relative h-80 w-80">
                <Image className="rounded-lg" alt="No Img..." width={100} height={300} src="/assests/first.webp" style={{ width: '100%' }} />
              </div>
              <h3 className="text-2xl mt-3 snap-x">Outdoor getaways</h3>
            </div>
            <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
              <div className="relative h-80 w-80">
                <div>
                  <Image className=" rounded-lg" alt="No Img..." width={100} height={300} src="/assests/second.webp"
                    style={{ width: '100%' }}  ></Image>
                </div>
              </div>
              <h3 className="text-2xl mt-3 snap-x">Unique stays</h3>
            </div>
            <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
              <div className="relative h-80 w-80">
                <div>
                  <Image className=" rounded-lg" alt="No Img..." width={100} height={300} src="/assests/third.webp"
                    style={{ width: '100%' }}  ></Image>
                </div>
              </div>
              <h3 className="text-2xl mt-3 snap-x">Entire homes</h3>
            </div>
            <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
              <div className="relative h-80 w-80">
                <div>
                  <Image className=" rounded-lg" alt="No Img..." width={100} height={300} src="/assests/fourth.webp"
                    style={{ width: '100%' }}  ></Image>
                </div>
              </div>
              <h3 className="text-2xl mt-3 snap-x">Pet allowed</h3>
            </div>
          </div>
        </section>
        <section className="relative py-16 cursor-pointer">
  <div className="relative h-40 md:h-80 lg:h-96 min-w-[300px] ">
    <div className="relative h-full  max-[320px]:w-11/12 w-full ">
      <Image
        className="rounded-2xl object-cover"
        alt="No Img..."
        width={100}
        height={300}
        src="/assests/footer.webp"
        layout="responsive"
        quality={100}
      />
    </div>
  </div>
  <div className="absolute top-16 md:top-32 left-4 md:left-12">
    <h3 className="max-[400px]:text-l md:text-2xl lg:text-4xl max-[500px]:mt-2 md:mb-3 w-48 md:w-64">The Greatest Outdoor</h3>
    <p className="text-sm leading-6 md:text-base lg:text-xl">Wishlists created by Areeb</p>
    <button className="text-sm text-white bg-gray-900 px-2 py-2 rounded-lg max-[400px]:mt-2 mt-4 lg:mt-6 xl:mt-7 2xl:mt-8">Get Inspiration</button>

  </div>
</section>

      </main>
    </div>
  );
}

export { Home };