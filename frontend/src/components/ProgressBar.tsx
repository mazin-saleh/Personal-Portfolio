import { useEffect, useState } from 'react';

const ProgressBar = () => {
  const [width, setWidth] = useState(0);

  const scrollHeight = () => {
    const element = document.documentElement;
    const ScrollTop = element.scrollTop || document.body.scrollTop;
    const ScrollHeight = element.scrollHeight || document.body.scrollHeight;
    const height = ScrollHeight - element.clientHeight;
    
    if (height <= 0) {
      setWidth(0);
      return;
    }

    const percent = (ScrollTop / height) * 100;
    setWidth(percent);
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollHeight);
    // Trigger once on mount to set initial state
    scrollHeight();
    return () => window.removeEventListener('scroll', scrollHeight);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-[100] bg-transparent pointer-events-none">
      <div
        className="h-full bg-[#1a1a1a] transition-all duration-150 ease-out"
        style={{ width: `${width}%` }}
      />
    </div>
  );
};

export default ProgressBar;
