const AccessibilityTools = () => {
    const handleTextSizeChange = (size) => {
      document.body.style.fontSize = size; // Adjust text size
    };
  
    const toggleContrast = () => {
      document.body.classList.toggle("light-mode"); 
    };
  
    return (
      <div className="flex gap-3">
        <button onClick={() => handleTextSizeChange("16px")} className="text-gray-500">A</button>
        <button onClick={() => handleTextSizeChange("20px")} className="text-gray-500">A+</button>
        <button onClick={toggleContrast} className="text-gray-500">Toggle Contrast</button>
      </div>
    );
  };

  export default AccessibilityTools;