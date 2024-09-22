const LanguageSelector = () => {
  const handleLanguageChange = (e) => {
    // Logic to change language
    console.log("Selected language:", e.target.value);
  };

  return (
    <select onChange={handleLanguageChange} className="text-gray-500">
      <option value="en">English</option>
      <option value="es">Spanish</option>
      <option value="fr">French</option>
      <option value="de">German</option>
      <option value="it">Italian</option>
      <option value="pt">Portuguese</option>
      <option value="ru">Russian</option>
      <option value="zh">Chinese</option>
    </select>
  );
};

export default LanguageSelector;
