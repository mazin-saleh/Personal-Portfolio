const YoRonald = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-8">
      <h1 className="text-9xl font-black font-sans text-primary tracking-tighter text-center">
        YO RONALD
      </h1>
      
      <div className="w-full rounded-lg overflow-hidden shadow-2xl">
        <video 
          controls 
          autoPlay 
          loop 
          className="w-full h-auto"
        >
          <source src="/assets/Anime_Video_Generation_Request.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default YoRonald;
