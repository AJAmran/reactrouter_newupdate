import { useParams } from "react-router";

const UserDetails = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500 text-white flex items-center justify-center">
      <div className="text-center bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-semibold text-blue-600 mb-4">
          User Details
        </h1>
        <p className="text-lg text-gray-700">
          Displaying information for User ID: {id}
        </p>
      </div>
    </div>
  );
};

export default UserDetails;
