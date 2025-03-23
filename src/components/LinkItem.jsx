export const LinkItem = ({ text }) => {
  return (
    <div className="flex flex-col items-center gap-1 group">
      <a
        className="
        font-alata text-primary-light cursor-pointer transition-opacity duration-300 group-hover:opacity-75
        max-sm:text-xl"
        href="#"
      >
        {text}
      </a>
      <span className="w-8 h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
    </div>
  );
};
