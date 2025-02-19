import { FC } from "react";
import { firstComponentItems } from "../../../data/data";
import { useNavigate } from "react-router-dom";

const FirstComponent: FC = () => {
  const navigate = useNavigate();

  return (
    <div className="p-[10%]">
      <div className="mt-10 mb-5 w-full">
        <div className="flex w-full gap-5">
          {firstComponentItems.map((item, i) => (
            <div
              key={`first_component_items${i}`}
              className="max-w-xs rounded bg-white overflow-hidden shadow-lg cursor-pointer hover:opacity-[0.5] "
            >
              <img className="w-full" src={item.pic} alt="Card" />
              <div className="px-6 py-4 flex flex-col gap-6">
                <div className="font-bold text-xl mb-2 text-center">
                  {item.title}
                </div>
                <button
                  className="bg-blue-500 px-4 py-2 w-full text-white hover:bg-blue-600 rounded-[6px]"
                  onClick={() => navigate(item.path)}
                >
                  More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FirstComponent;
