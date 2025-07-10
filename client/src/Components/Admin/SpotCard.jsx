import { Link } from "react-router-dom";

const SpotCard = ({ spot, onDelete }) => {
  return (
    <div className="border p-4 rounded shadow-md bg-white">
      <h2 className="text-xl font-semibold">{spot.name}</h2>
      <p className="text-gray-600">{spot.location}</p>
      <div className="flex gap-3 mt-4">
        <Link
          to={`/admin/edit/${spot._id}`}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Edit
        </Link>
        <button
          onClick={() => onDelete(spot._id)}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default SpotCard;
