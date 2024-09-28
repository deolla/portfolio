const BackToTopButton = () => {
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  
    return (
      <button onClick={scrollToTop} className="text-red-600">
        Back to Top
      </button>
    );
  };

export default BackToTopButton;