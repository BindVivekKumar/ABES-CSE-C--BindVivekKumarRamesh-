import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ViewUser = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUsers =
      JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);
  }, []);

  const handleDelete = (id) => {
    const filteredUsers = users.filter(
      (user) => user.id !== id
    );

    localStorage.setItem(
      "users",
      JSON.stringify(filteredUsers)
    );

    setUsers(filteredUsers);
  };

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center">
        All Users
      </h2>

      {users.length === 0 ? (
        <p className="text-center text-gray-500">
          No Users Found
        </p>
      ) : (
        <div className="space-y-4">
          {users.map((user) => (
            <div
              key={user.id}
              className="bg-white p-5 rounded-xl shadow flex justify-between items-center"
            >
              <div>
                <h3 className="font-semibold text-lg">
                  {user.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {user.email}
                </p>
                <p className="text-gray-600 text-sm">
                  {user.phone}
                </p>
              </div>

              <div className="space-x-3">
                <button
                  onClick={() =>
                    navigate(`/edit-user/${user.id}`)
                  }
                  className="bg-yellow-500 text-white px-4 py-1 rounded-lg hover:bg-yellow-600"
                >
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(user.id)}
                  className="bg-red-600 text-white px-4 py-1 rounded-lg hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ViewUser;