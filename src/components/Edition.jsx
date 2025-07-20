import FadeContent from "./FadeComponent";
import React from "react";

function Edition({ 
  imageSrc, 
  title, 
  description, 
  imageAlt = "Edition cover",
  children = null,
  theme = "light",
  childrenLayout = "justify-center" // Default to center, but can be any Tailwind classes
}) {
  const lightThemeClasses = "p-6 bg-white shadow-md rounded-lg";
  const darkThemeClasses = "p-6 bg-black shadow-md rounded-lg";
  
  const cardClasses = theme === "dark" ? darkThemeClasses : lightThemeClasses;
  const textClasses = theme === "dark" ? "text-gray-300" : "text-gray-800";
  const titleClasses = theme === "dark" ? "text-gray-100" : "text-gray-800";

  // Function to apply theme styling to children
  const applyThemeToChildren = (children, theme) => {
    if (!children) return children;
    
    return React.Children.map(children, (child) => {
      if (!React.isValidElement(child)) return child;
      
      // Get current className
      const currentClassName = child.props.className || "";
      
      // Apply theme-based text styling if it's a text element
      let newClassName = currentClassName;
      if (theme === "dark") {
        // For dark theme, ensure text elements have light colors
        if (child.type === "h1" || child.type === "h2" || child.type === "h3" || 
            child.type === "h4" || child.type === "h5" || child.type === "h6") {
          newClassName = `${currentClassName} text-gray-100`.trim();
        } else if (child.type === "p" || child.type === "span" || child.type === "div") {
          newClassName = `${currentClassName} text-gray-300`.trim();
        }
      } else {
        // For light theme, ensure text elements have dark colors
        if (child.type === "h1" || child.type === "h2" || child.type === "h3" || 
            child.type === "h4" || child.type === "h5" || child.type === "h6") {
          newClassName = `${currentClassName} text-gray-800`.trim();
        } else if (child.type === "p" || child.type === "span" || child.type === "div") {
          newClassName = `${currentClassName} text-gray-800`.trim();
        }
      }
      
      // Recursively apply to nested children
      const newChildren = child.props.children ? applyThemeToChildren(child.props.children, theme) : child.props.children;
      
      return React.cloneElement(child, {
        ...child.props,
        className: newClassName,
        children: newChildren
      });
    });
  };

  return (
    <div className={cardClasses}>
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
        <div className={`order-2 md:order-1 md:w-1/2 md:mt-8 flex flex-col justify-between items-stretch md:gap-4 h-full min-h-[400px] font-medium ${textClasses}`}>
          <FadeContent className="flex justify-center" delay={0}>
            <h2 className={`text-2xl font-bold text-center ${titleClasses}`}>
              {title}
            </h2>
          </FadeContent>
          <FadeContent className="" delay={0}>
            <p className={`text-center ${textClasses}`}>
              {description}
            </p>
          </FadeContent>
          
          {/* Children content with automatic theme styling - now with customizable layout */}
          {children && (
            <FadeContent className={`self-center w-full h-full flex flex-col ${childrenLayout} items-center gap-4`} delay={0}>
              {applyThemeToChildren(children, theme)}
            </FadeContent>
          )}
        </div>
      </div>
    </div>
  );
}

export default Edition;
