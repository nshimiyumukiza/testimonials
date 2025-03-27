import { useEffect, useState } from "react";

const testimonialData = [
  {
    id: 1,
    name: "Erneste NSHIMIYUMUKIZA",
    role: "full stack developer at MTN Rwanda",
    text: "after finishing study coding at nyabikeke coding school a get the cance for working in Mtn Rwanda or BK Of Kigali x",
    image: "src/components/image/image.png",
  },
  {
    id: 1,
    name: "Erneste SAGAGA",
    role: "full stack developer at MTN Rwanda",
    text: "after finishing study coding at nyabikeke coding school a get the cance for working in Mtn Rwanda or BK Of Kigali",
    image:
      "https://media.istockphoto.com/id/1278975061/photo/african-guy-thinking-in-class.jpg?s=1024x1024&w=is&k=20&c=AmJApyWZKxzDZehi8h0BoEZQvFHVxN3MuLjwnBv2xJg=",
  },
  {
    id: 1,
    name: "Cyuzuzo Alice",
    role: "full stack developer at MTN Rwanda",
    text: "after finishing study coding at nyabikeke coding school a get the cance for working in Mtn Rwanda or BK Of Kigali y",
    image: "src/components/image/image.png",
  },
  {
    id: 1,
    name: "Erneste NSHIMIYUMUKIZA",
    role: "full stack developer at MTN Rwanda",
    text: "after finishing study coding at nyabikeke coding school a get the cance for working in Mtn Rwanda or BK Of Kigali z",
    image: "src/components/image/image copy.png",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(false);
      setTimeout(() => {
        setCurrentIndex(
          (prevIndex) => (prevIndex + 1) % testimonialData.length
        );
        setAnimate(true);
      }, 500);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index) => {
    setAnimate(false);
    setTimeout(() => {
      setCurrentIndex(index);
      setAnimate(true);
    }, 300);
  };

  return (
    <div className="px-16 bg-gray-50 mt-8 text-black">
      <div className="mx-auto max-w-[1280px] w-[90%]">
        <div>
          <h1 className="text-center font-medium text-lg text-blue-500">
            What Our Gruates Say
          </h1>
        </div>
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className=" w-full p-8 transition-all duration-500 bg-white md:w-2/3 rounded-xl ">
            <div
              className={`flex flex-col ${
                animate ? "opacity-100 translate-y-0" : "opacity-0 translate-4"
              }`}
            >
              <div>
                <svg
                  className="w-8 h-8 mb-4 text-blue-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-lg italic leading-relaxed">
                  {testimonialData[currentIndex].text}
                </p>
              </div>
              <div className="flex items-center">
                <img
                  className="w-12 h-12 rounded-full mr-4 "
                  src={testimonialData[currentIndex].image}
                  alt={testimonialData[currentIndex].name}
                />
                <div>
                  <p className="font-semibold ">
                    {testimonialData[currentIndex].name}
                  </p>
                  <p className="text-blue-600">
                    {testimonialData[currentIndex].role}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 w-full gap-4 md:w-1/3">
            {testimonialData.map((testimonail, index) => (
              <div
                className={`aspect-square rounded-lg overflow-hidden cursor-pointer transifrom transition hover: scale-105 ${
                  currentIndex === index ? "ring-4 ring-blue-600" : ""
                }`}
                key={testimonail.id}
                onClick={() => handleDotClick(index)}
              >
                <img src={testimonail.image} alt={testimonail.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
