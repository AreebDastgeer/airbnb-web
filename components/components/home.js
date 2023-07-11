import Image from 'next/image' 
import React from 'react';

 function Home() {
    return (
        <div className="bg-white">
        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
        <div>
          <Image src="/assests/image.webp" alt="No Img..." width={100} height={300}
            layout="responsive"
            objectFit="cover"
            quality={100}
            style={{ width: '100%' }}
          ></Image>
        </div>
        <div className="absolute top-1/2 w-full text-center">
          <p className="text-sm sm:text-lg text-black">
            Not Sure Where To Go? Perfect.
          </p>
          <br></br>
          <button
            className="text-purple-500 bg-white px-10 py-4 shadow-md  rounded-full font-bold my-3 hover:shadow-xl active:scale-90  transition duration-150">I am
            flexible</button>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-8 md:px-16  text-black">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5  text-black p-2">Explore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div
              className="flex items-center m-2 mt-5 space-x-4 rounded-xl  cursor-pointer hover:bg-gray-100 hover:scale-105  transition transfrom duration-200 ease-out">
              <div className="relative h-16 w-16">
                <div>
                  <Image className= " rounded-lg" alt="No Img..." width={100} height={300} src="/assests/1st.webp" 
                    style={{ width: '100%' }}    ></Image>
                </div>
              </div>
              <div >
                <h2>London</h2>
                <h3>45-minute drive</h3>
              </div>
            </div>
            <div
              className="flex items-center m-2 mt-5 space-x-4 rounded-xl  cursor-pointer hover:bg-gray-100 hover:scale-105  transition transfrom duration-200 ease-out">
              <div className="relative h-16 w-16">
                <div>
                  <Image className= " rounded-lg" alt="No Img..." width={100} height={300} src="/assests/4th.webp" 
                    style={{ width: '100%' }}

                  ></Image>



                </div>
              </div>
              <div>
                <h2>Manchester</h2>
                <h3>4.5-hour drive</h3>
              </div>
            </div>
            <div
              className="flex items-center m-2 mt-5 space-x-4 rounded-xl  cursor-pointer hover:bg-gray-100 hover:scale-105  transition transfrom duration-200 ease-out">
              <div className="relative h-16 w-16">
                <div>
                  <Image className= " rounded-lg" alt="No Img..." width={100} height={300} src="/assests/7th.webp" 
                    style={{ width: '100%' }}    ></Image>



                </div>
              </div>
              <div>
                <h2>Liverpool</h2>
                <h3>4.5-hour drive</h3>
              </div>
            </div>
            <div
              className="flex items-center m-2 mt-5 space-x-4 rounded-xl  cursor-pointer hover:bg-gray-100 hover:scale-105  transition transfrom duration-200 ease-out">
              <div className="relative h-16 w-16">
                <div>
                  <Image className= " rounded-lg" alt="No Img..." width={100} height={300} src="/assests/2nd.webp" 
                  
                    style={{ width: '100%' }}    ></Image>
                </div>
              </div>
              <div>
                <h2>York</h2>
                <h3>4-hour drive</h3>
              </div>
            </div>
            <div
              className="flex items-center m-2 mt-5 space-x-4 rounded-xl  cursor-pointer hover:bg-gray-100 hover:scale-105  transition transfrom duration-200 ease-out">
              <div className="relative h-16 w-16">
                <div>
                  <Image className= " rounded-lg" alt="No Img..." width={100} height={300} src="/assests/5th.webp" 
                  
                    style={{ width: '100%' }}  ></Image>



                </div>
              </div>
              <div>
                <h2>Cardiff</h2>
                <h3>45-minute drive</h3>
              </div>
            </div>
            <div
              className="flex items-center m-2 mt-5 space-x-4 rounded-xl  cursor-pointer hover:bg-gray-100 hover:scale-105  transition transfrom duration-200 ease-out">
              <div className="relative h-16 w-16">
                <div>
                  <Image className= " rounded-lg" alt="No Img..." width={100} height={300} src="/assests/8th.webp" 
                    style={{ width: '100%' }}  ></Image>


                </div>
              </div>
              <div>
                <h2>Birkenhead</h2>
                <h3>4.5-hour drive</h3>
              </div>
            </div>
            <div
              className="flex items-center m-2 mt-5 space-x-4 rounded-xl  cursor-pointer hover:bg-gray-100 hover:scale-105  transition transfrom duration-200 ease-out">
              <div className="relative h-16 w-16">
                <div>
                  <Image className= " rounded-lg" alt="No Img..." width={100} height={300} src="/assests/3rd.webp" 
                    style={{ width: '100%' }}  ></Image>


                </div>
              </div>
              <div>
                <h2>Newquay</h2>
                <h3>6-hour drive</h3>
              </div>
            </div>
            <div
              className="flex items-center m-2 mt-5 space-x-4 rounded-xl  cursor-pointer hover:bg-gray-100 hover:scale-105  transition transfrom duration-200 ease-out">
              <div className="relative h-16 w-16">
                <div>
                  <Image className= " rounded-lg" alt="No Img..." width={100} height={300} src="/assests/6th.webp" 
                    style={{ width: '100%' }}  ></Image>
                </div>
              </div>
              <div>
                <h2>Hove</h2>
                <h3>2-hour drive</h3>
              </div>
            </div>
          </div>
        </section>
        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          <div className=" flex space-x-3  p-3 -ml-3 overflow-x-auto overflow-y-hidden no-scrollbar">
            <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
              <div className=" relative h-80 w-80">
                <div>
                  <Image className= " rounded-lg" alt="No Img..." width={100} height={300} src="/assests/first.webp"
                    style={{ width: '100%' }}  ></Image>
                </div>
              </div>
              <h3 className="text-2xl mt-3 snap-x">Outdoor getaways</h3>
            </div>
            <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
              <div className="relative h-80 w-80">
                <div>
                  <Image className= " rounded-lg" alt="No Img..." width={100} height={300} src="/assests/second.webp"
                    style={{ width: '100%' }}  ></Image>
                </div>
              </div>
              <h3 className="text-2xl mt-3">Unique stays</h3>
            </div>
            <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
              <div className=" relative h-80 w-80">
                <div>
                  <Image className= " rounded-lg" alt="No Img..." width={100} height={300} src="/assests/third.webp"
                    style={{ width: '100%' }}  ></Image>
                </div>
              </div>
              <h3 className="text-2xl mt-3">Entire homes</h3>
            </div>
            <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
              <div className=" relative h-80 w-80">
                <div>
                  <Image className= " rounded-lg" alt="No Img..." width={100} height={300} src="/assests/fourth.webp"
                    style={{ width: '100%' }}  ></Image>
                </div>
              </div>
              <h3 className="text-2xl mt-3">Pet allowed</h3>
            </div>
          </div>
        </section>
        <section className="relative py-16 cursor-pointer">
          <div className="rounded-md relative h-96 min-w-[300px]">
            {/* style="display:block;overflow:hidden;position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;margin:0" */}
            <div>
              <Image className='rounded-2xl' alt="No Img..." width={100} height={300} src="/assests/footer.webp"
                style={{ width: '100%' }} layout="responsive"
                objectFit="cover"
                quality={100} ></Image>

            </div>
          </div>
          <div className="absolute top-32 left-12 ">
            <h3 className="text-4xl mb-3 w-64">The Greatest Outdoor</h3>
            <p>Wishlists created by Areeb</p><button className="text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5">Get
              Inspiration</button>
          </div>
        </section>
      </main>
      </div>
    );
}
export  {Home};