export const CreationItem = ({ mobileImg, desktopImg, firstWord, secondWord }) => (
  <div className="bg-white text-center font-bold relative group" style={{ overflow: "hidden" }}>
    <img
      src={desktopImg}
      alt="Creation"
      className="object-cover hidden sm:block w-full h-full"
    />

    {/* Image for mobile screen */}
    <img
      src={mobileImg}
      alt="Creation"
      className="object-cover sm:hidden w-full h-full"
    />

    <div
      className="absolute top-0 left-0 right-0 bottom-0 bg-black sm:opacity-40 opacity-0 cursor-pointer hover:bg-white z-10 group-hover:bg-white group-hover:opacity-60"
      style={{ transition: 'all 250ms ease-in-out' }}>
    </div>

    <div className="flex flex-col justify-center items-start gap-0 absolute bottom-0 left-0 right-0 bg-transparent text-primary-light py-6 px-8 z-20 cursor-pointer group-hover:text-primary-dark font-medium
    sm:py-8 sm:px-12
    max-sm:py-4 max-sm:px-5">
      <span className="font-josefin text-4xl sm:text-3xl max-sm:text-3xl max-sm:font-medium">{firstWord}</span>
      <span className="font-josefin text-4xl sm:text-3xl max-sm:text-3xl max-sm:font-medium">{secondWord}</span>
    </div>
  </div>
);
