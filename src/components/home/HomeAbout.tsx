import { FC } from "react";
import useSWR from "swr";
import axios from "axios";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const HomeAbout: FC = () => {
  const { data, error } = useSWR(
    "http://localhost:5174/api/v1/home-about",
    fetcher
  );

  if (error) {
    console.error("Error fetching data:", error);
    return (
      <div>
        <div>Failed to load</div>
        <div>{error.message}</div>
        {error.info && <pre>{error.info}</pre>}
      </div>
    );
  }

  if (!data) return <div>Loading...</div>;

  // Extracting homeAbouts array from the fetched data
  const homeAbouts = data?.data?.homeAbouts;

  // Check if homeAbouts array exists and has at least one item
  if (!homeAbouts || homeAbouts.length === 0) {
    return <div>No content available</div>;
  }

  // Extracting the first item from homeAbouts array
  const homeAboutContent = homeAbouts[0];

  return (
    <div className="mt-24 flex flex-col gap-4 mb-5">
      <h1 className="text-blue-400 text-[40px] font-[600]">
        {homeAboutContent.title}
      </h1>
      <p className="text-gray-400">{homeAboutContent.subtitle}</p>
    </div>
  );
};

export default HomeAbout;
