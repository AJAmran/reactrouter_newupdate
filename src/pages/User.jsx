import { Link } from "react-router";

const User = () => {
  const userList = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Doe" },
    { id: 3, name: "Alice" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-8">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">User List</h1>
      <ul className="w-full max-w-md space-y-4">
        {userList.map((user) => (
          <li
            key={user.id}
            className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
          >
            <Link
              to={`/users/${user.id}`}
              className="text-xl font-semibold text-blue-600 hover:text-blue-800"
            >
              {user.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default User;
