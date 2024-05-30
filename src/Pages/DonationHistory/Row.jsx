/* eslint-disable react/prop-types */
const Row = ({ index, donation }) => {
  const Time = new Date(donation.time).toLocaleDateString();
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{Time}</td>
      <td>$ {donation.amount}</td>
      <td>{donation.transactionId}</td>
      <td>
        {donation.status === "succeeded" ? (
          <span className="text-green-600 bg-green-500 bg-opacity-20 rounded-3xl px-2 py-1">
            Succeed
          </span>
        ) : (
          <span className="text-red-600 bg-red-500 bg-opacity-20 rounded-3xl px-2 py-1">
            Failed
          </span>
        )}
      </td>
    </tr>
  );
};

export default Row;
