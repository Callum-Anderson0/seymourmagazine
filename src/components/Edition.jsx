import FadeContent from "./FadeComponent";

function Edition({ 
  imageSrc, 
  title, 
  description, 
  imageAlt = "Edition cover",
  children = null
}) {
  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <div className="edition-container my-auto p-0 md:p-8 flex flex-col md:flex-row md:items-start gap-6 items-center justify-center">
        {/* Image first on small, right side on large */}
        <div className="w-full h-full md:w-1/2 order-1 md:order-2 flex my-auto justify-center items-center">
          <FadeContent>
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full object-cover rounded transform scale-100 z-10"
            />
          </FadeContent>
        </div>

        {/* Text content */}
        <div className="order-2 md:order-1 md:w-1/2 md:mt-8 flex flex-col justify-between items-stretch md:gap-4 h-full min-h-[400px] text-gray-800 font-medium">
          <FadeContent className="flex justify-center" delay={0}>
            <h2 className="text-2xl font-bold text-center">
              {title}
            </h2>
          </FadeContent>
          <FadeContent className="" delay={0}>
            <p className="text-center text-gray-800">
              {description}
            </p>
          </FadeContent>
          
          {/* Children content - now handles everything */}
          {children && (
            <FadeContent className="self-center w-full h-full flex justify-center" delay={0}>
              {children}
            </FadeContent>
          )}
        </div>
      </div>
    </div>
  );
}

export default Edition;
