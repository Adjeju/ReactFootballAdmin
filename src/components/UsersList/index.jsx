import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

const UsersList = ({ searchQuery, users, clearSearch }) => {
  const navigate = useNavigate();

  const onUserClick = (userId) => {
    navigate(`/admin/users/${userId}`);
    clearSearch();
  };

  return (
    <div className="position-relative">
      {searchQuery.length >= 3 && (
        <div className="users-list bg-white container px-0">
          {users
            .filter(
              ({ username }) =>
                username &&
                username.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .map(({ userId, username }) => (
              <div
                className="users-list-item"
                onClick={() => onUserClick(userId)}
                key={userId}
              >
                {username}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default UsersList;
