function Edition() {
  return (
    <div className="edition-container p-8 flex flex-col lg:flex-row lg:items-start gap-6">
        {/* Image first on small, right side on large */}
        <img 
            src="/first edition.jpg" 
            alt="Description" 
            className="w-full lg:w-1/2 order-1 lg:order-2 object-cover rounded transform scale-100"
        />

        {/* Text content */}
        <div className="order-2 lg:order-1 lg:w-1/2 lg:mt-8">
            <h2 className="text-2xl font-bold mb-4">Your Heading Here</h2>
            <p className="text-gray-700">Your paragraph text goes here. It will appear below the image on small screens, and to the left on large screens.</p>
        </div>
        </div>
  );
}

export default Edition;