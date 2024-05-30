import { useQuery } from "@tanstack/react-query";
import useAuth from "../../CustomHooks/useAuth";
import useAxiosSecure from "../../CustomHooks/useAxiosSecure";
import Row from "./Row";

const DonationHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: donations = [] } = useQuery({
    queryKey: ["donate", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/donations/${user?.email}`);

      return res.data;
    },
  });

  return (
    <div>
      <h1 className="text-3xl">Total Donations: {donations.length}</h1>
      <div className="overflow-x-auto">
        {donations.length === 0 ? (
          <div className="flex items-center justify-center min-h-[50vh]">
            <h1 className="text-center text-2xl md:text-3xl lg:text-4xl mt-5 font-semibold">
              Your Donation Data Will Appear Here!
            </h1>
          </div>
        ) : (
          <table className="table table-zebra text-center">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>DATE</th>
                <th>AMOUNT</th>
                <th>TRANSACTION ID</th>
                <th>STATUS</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {donations.map((donation, index) => (
                <Row key={donation._id} donation={donation} index={index}></Row>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default DonationHistory;
