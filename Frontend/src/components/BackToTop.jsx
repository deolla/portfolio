const BackToTopButton = () => {
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  
    return (
      <button onClick={scrollToTop} className="text-gray-500">
        Back to Top
      </button>
    );
  };

export default BackToTopButton;