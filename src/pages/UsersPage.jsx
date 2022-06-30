import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { PlusIcon } from "@heroicons/react/outline";
import UsersList from "../components/UsersList";
import { useAddUserMutation, useGetAllUsersQuery } from "../api/usersApi";

const UsersPage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const clearSearch = () => setSearchQuery("");
  const { data, error } = useGetAllUsersQuery();
  const [addNewUser] = useAddUserMutation();

  if (error?.status === 401) {
    localStorage.removeItem("accessToken");
    return <Navigate to="/admin" />;
  }

  const onAddUserClick = () => {
    try {
      addNewUser({ userId: data?.users.length + 1 });
      navigate(`/admin/users/${data?.users.length + 1}`);
    } catch (error) {
      console.error("rejected", error);
    }
  };

  return (
    <div>
      <h1>Users</h1>
      <hr />
      <div className="row">
        <div className="col-sm-10">
          <Form.Control
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Type to find match..."
            aria-label="Default select example"
          />
        </div>
        <div className="col-sm-2">
          <Button
            className="d-flex align-items-center justify-content-center mx-auto w-100"
            onClick={onAddUserClick}
          >
            <PlusIcon width={18} />
            Add user
          </Button>
        </div>
      </div>
      <UsersList
        users={data?.users}
        searchQuery={searchQuery}
        clearSearch={clearSearch}
      />
      <hr />
      <Outlet />
    </div>
  );
};

export default UsersPage;
