import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { events } from "../../data/data";

const Events: FC = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto mt-10 mb-10">
      <p className="dark:text-gray-300 text-[40px] text-center mb-10">
        Our Events
      </p>
      <div className="flex flex-wrap justify-between gap-2">
        {events.map((event) => (
          <div key={event.id} className="w-full md:w-1/4 mt-5">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2">{event.title}</h2>
                <p className="text-gray-700 mb-4">{event.subtitle}</p>
                <a
                  onClick={() => navigate(`/events/${event.id}`)}
                  className="text-blue-500 hover:underline"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
