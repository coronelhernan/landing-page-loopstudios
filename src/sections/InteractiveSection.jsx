import { desktopImages, mobileImages } from "@utils/images.js";
import { interactiveInfo } from "@utils/textContent.js";

export const Interactive = () => {
  return (
    <section className="w-full h-auto flex items-center px-4 py-16 sm:py-28 bg-primary-light sm:h-[90vh] sm:px-10">
      <main className="w-full flex flex-col justify-start items-center sm:w-11/12 sm:flex-row sm:justify-start">
        <picture>
          <source srcSet={desktopImages.desktopInteractive} media="(min-width: 640px)" />
          {/* Image mobile */}
          <img
            className="h-auto w-full pl-0 sm:pl-12 sm:w-[820px]"
            src={mobileImages.mobileInteractive}
            alt="Interactive VR"
          />
        </picture>

        <article className="h-84 w-full flex flex-col justify-center items-center bg-primary-light gap-5 mt-14  
          sm:h-72 sm:w-[600px] sm:absolute sm:left-165 sm:p-[78px] sm:justify-start sm:items-start sm:top-240 sm:mt-0
          max-sm:mt-20">
          <h1 className="font-josefin text-2xl sm:text-5xl max-sm:text-4xl text-center sm:text-start">
            THE LEADER IN <br />
            INTERACTIVE VR
          </h1>

          <div className="w-full px-16 sm:px-2 max-sm:px-8">
            <p className="font-josefin font-bold text-primary-gray-dark text-center text-xl 
              sm:text-start sm:text-base max-sm:px-4">
              {interactiveInfo.description}
            </p>
          </div>
        </article>
      </main>
    </section>
  );
};
