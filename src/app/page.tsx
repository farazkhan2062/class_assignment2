

export default function Home() {
  return (
    <div className=" bg-[#252b42] min-h-full flex flex-col">
      
      <nav className=" h-14 bg-[#252b42] py-10 px-28 justify-between flex items-center w-[92%] ">
        <h3 className="  text-white font-bold text-xl hover:text-gray-500  ">
          BrandName
        </h3>

        <div className="">
          <ul className="text-white flex  space-x-6">
            <li></li>
            <li>
              <a className=" hover:text-gray-500 outline-offset-4px" href="#">
                Home
              </a>
            </li>
            <li>
              <a className=" hover:text-gray-500" href="Product">
                Product
              </a>
            </li>
            <li>
              <a className=" hover:text-gray-500" href="#">
                Pricing
              </a>
            </li>
            <li>
              <a className=" hover:text-gray-500" href="#">
                Connect
              </a>
            </li>
          </ul>
        </div>
        <div className="text-white space-x-6">
          <button className=" hover:text-gray-500">Login</button>
          <button className="bg-blue-600 py-2 px-4 rounded-md text-sm hover:bg-blue-600  hover:text-gray-300">
            Join Us
          </button>
        </div>
      </nav>

      <main className="flex flex-col items-center text-center flex-glow mt-16">
        <div className="text-blue-400 text-sm mb-4">Welcome</div>
        <br />
        <h1 className="text-white mb-4 text-4xl font-monserrat">
          Selling on the
          <br />
          internet like a pro
        </h1>

        <p className="text-white max-w-lg text-sm mb-8">
          We know how large objects will act,but things on a <br />
          small scale just do not that ways.
        </p>
        <div className="flex space-x-4">
          <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
            Get Quote Now
          </button>
          <button className="bg-transparent border border-blue-400 text-blue-500 rounded-md py-2 px-3 hover:text-gray-200">
            Learn more
          </button>
        </div>
      </main>
      <div className="flex justify-center items-center min-h-screen">
        <div className="grid grid-cols-3 gap-5">
          <div className="bg-[#ffffff] rounded w-80 h-72 pt-8 px-12 flex flex-col">
            <div className="w-[70px] h-[76px] bg-[#FFDCD1] rounded-lg mb-4"></div>
            <h5 className="text-[#252b42] text-[16px] leading-[24px] tracking-[0.1px] font-montserrat">
              Training Courses
            </h5>
            <div className="w-[50px] h-[2px] bg-[#e74040] mt-4"></div>
            <p className="text-[#737373] text-[14px] leading-[20px] tracking-[0.1px] pt-5 font-montserrat">
              The gradual accumulation of information and atomic and small-scale
              behavior...
            </p>
          </div>

          {/* Second div */}
          <div className="bg-[#ffffff] rounded w-80 h-72 pt-8 px-12 flex flex-col">
            <div className="w-[70px] h-[76px] bg-[#b9eaa8] rounded-lg mb-4"></div>
            <h5 className="text-[#252b42] text-[16px] leading-[24px] tracking-[0.1px] font-montserrat">
              Training Courses
            </h5>
            <div className="w-[50px] h-[2px] bg-[#e74040] mt-4"></div>
            <p className="text-[#737373] text-[14px] leading-[20px] tracking-[0.1px] pt-5 font-montserrat">
              The gradual accumulation of information and atomic and small-scale
              behavior...
            </p>
          </div>

          {/* Third div */}
          <div className="bg-[#23a6f0] rounded w-80 h-72 pt-8 px-12 flex flex-col">
            <div className="w-[70px] h-[76px] bg-[#ffffff] rounded-lg mb-4"></div>
            <h5 className="text-[#ffffff] text-[16px] leading-[24px] tracking-[0.1px] font-montserrat">
              Training Courses
            </h5>
            <div className="w-[50px] h-[2px] bg-[#ffffff] mt-4"></div>
            <p className="text-[#ffffff] text-[14px] leading-[20px] tracking-[0.1px] pt-5 font-montserrat">
              The gradual accumulation of information and atomic and small-scale
              behavior...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
