import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../CustomHooks/useAxiosSecure";
import NewsCard from "./NewsCard";

const NewsAndUpdates = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: newsData = [],
    isPending,
    isError,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: () => {
      return axiosSecure.get(`/updatesandnews`).then((res) => {
        return res.data;
      });
    },
  });

  return (
    <div>
      {isError && (
        <div className="max-w-96 mx-auto text-center">
          {" "}
          <h1 className="text-3xl">Data Not Found!</h1>
          <h3 className="text-xl">Refresh The Page or Try Again Later</h3>
        </div>
      )}
      {isPending ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-5 lg:gap-10">
          <div className="flex flex-col gap-3 md:gap-6 border p-5 rounded-xl">
            <div className="skeleton h-60 w-full"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
            <hr className="" />
            <div className="skeleton h-8 w-20"></div>
          </div>
          <div className="flex flex-col gap-3 md:gap-6 border p-5 rounded-xl">
            <div className="skeleton h-60 w-full"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
            <hr className="" />
            <div className="skeleton h-8 w-20"></div>
          </div>
          <div className="flex flex-col gap-3 md:gap-6 border p-5 rounded-xl">
            <div className="skeleton h-60 w-full"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
            <hr className="" />
            <div className="skeleton h-8 w-20"></div>
          </div>
          <div className="flex flex-col gap-3 md:gap-6 border p-5 rounded-xl">
            <div className="skeleton h-60 w-full"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
            <hr className="" />
            <div className="skeleton h-8 w-20"></div>
          </div>
          <div className="flex flex-col gap-3 md:gap-6 border p-5 rounded-xl">
            <div className="skeleton h-60 w-full"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
            <hr className="" />
            <div className="skeleton h-8 w-20"></div>
          </div>
          <div className="flex flex-col gap-3 md:gap-6 border p-5 rounded-xl">
            <div className="skeleton h-60 w-full"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
            <hr className="" />
            <div className="skeleton h-8 w-20"></div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-3 lg:gap-6">
          {newsData.map((data) => (
            <NewsCard key={data._id} data={data}></NewsCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default NewsAndUpdates;
