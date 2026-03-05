import axios from "axios";
import React, { useEffect, useState } from "react";

const Table = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.github.com/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="bg-white rounded-lg shadow flex flex-col flex-1 min-h-0">

      <div className="overflow-y-auto flex-1">

        <table className="w-full text-left">

          <thead className="bg-gray-50 text-gray-600 text-sm uppercase sticky top-0">
            <tr>
              <th className="px-6 py-3">Client</th>
              <th className="px-6 py-3">Type</th>
              <th className="px-6 py-3">Profile</th>
              <th className="px-6 py-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-t hover:bg-gray-50">

                <td className="px-6 py-4 flex items-center gap-3">
                  <img
                    src={user.avatar_url}
                    alt=""
                    className="w-10 h-10 rounded-full"
                  />
                  {user.login}
                </td>

                <td className="px-6 py-4">{user.type}</td>

                <td className="px-6 py-4">
                  <a
                    href={user.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-purple-600"
                  >
                    Visit
                  </a>
                </td>

                <td className="px-6 py-4">
                  <button className="bg-purple-600 text-white px-4 py-1 rounded hover:bg-purple-700">
                    Action
                  </button>
                </td>

              </tr>
            ))}
          </tbody>

        </table>

      </div>

    </div>
  );
};

export default Table;