const BusinessSection = () => {
    return (
        <div className="relative flex items-center justify-center bg-white py-8 px-8">
  {/* Image + Info Container */}
  <div className="relative w-full max-w-4xl rounded-xl flex shadow-lg">
    <img
      src="https://www.xpectoitsolutions.com/assets/img/technologo/small-business.webp"
      alt="Bakery"
      className="w-full h-64 md:h-80 object-cover rounded-xl"
    />

    {/* Blue Info Box - narrower and taller */}
    <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 
                    bg-blue-800 text-white p-6 md:p-8 w-full max-w-sm rounded-xl shadow-lg 
                    overflow-auto max-h-[24rem] md:max-h-[28rem]">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">Small Business</h2>
      <p className="text-sm md:text-base leading-relaxed">
        Xpecto® aids small businesses with custom software solutions to optimize
        workflows, cut costs, and enhance customer experiences, ensuring
        efficiency, growth, and a competitive edge.
      </p>
    </div>

    {/* Arrow Button */}
    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white w-10 h-10 flex items-center justify-center rounded-full shadow-md cursor-pointer hover:bg-blue-100 z-10">
      <span className="text-xl text-blue-800">&#8594;</span>
    </div>
  </div>
</div>


    );
  }
  export default BusinessSection