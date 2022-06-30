import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetUserByIdQuery } from "../../api/usersApi";
import { Button, Badge, Table } from "react-bootstrap";
import { ChevronLeftIcon } from "@heroicons/react/outline";

const UserInfo = () => {
  const navigate = useNavigate();
  const { userId } = useParams();
  const { data } = useGetUserByIdQuery(userId);
  return (
    <div>
      <div className="row">
        <div className="col-sm-3">
          <Button
            className="d-flex align-items-center"
            size="sm"
            onClick={() => navigate("/admin/users")}
          >
            <ChevronLeftIcon width={18} />
            All users
          </Button>
          <div
            style={{ backgroundColor: "#f5f5f5" }}
            className="user-avatar mt-3 py-3 rounded border"
          >
            <img
              style={{ width: "125px" }}
              src={data?.imageUrl}
              alt="User image"
              className="rounded-circle d-block mx-auto border border-3 border-secondary"
            />
          </div>
        </div>
        <div className="col-sm-9">
          <h2>User #{data?.userId}</h2>
          <p>Joined {data?.created}</p>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-sm-3">
          <strong>Logins</strong>
        </div>
        <div className="col-sm-9">
          {data?.identities.length ? (
            <Table className="align-middle" size="sm">
              <thead>
                <tr>
                  {["Login", "Password", "Type", "Created", ""].map((label) => (
                    <td>{label}</td>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data?.identities.map(({ created, id, secret, type }) => (
                  <tr>
                    <td>
                      <Badge bg="secondary">{id}</Badge>
                    </td>
                    <td>
                      <Badge bg="secondary">{secret.substring(0, 32)}...</Badge>
                    </td>
                    <td>{type}</td>
                    <td>{created}</td>
                    <td>
                      <Button className="float-end" size="sm">
                        Change password
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <em>User has no logins</em>
          )}
          <div>
            <Button size="sm" className="mt-2">
              Add login
            </Button>
          </div>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-sm-3">
          <strong>Permissions</strong>
        </div>
        <div className="col-sm-9">
          {data?.permissions.length ? (
            <Table className="align-middle" size="sm">
              <thead>
                <tr>
                  {["Name", ""].map((label) => (
                    <td>{label}</td>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data?.permissions.map((perm) => (
                  <tr>
                    <td>
                      <Badge bg="secondary">{perm}</Badge>
                    </td>
                    <td>
                      <Button className="float-end" variant="danger" size="sm">
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <em>User has no permissions</em>
          )}
          <div>
            <Button size="sm" className="mt-2">
              Add permission
            </Button>
          </div>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-sm-3">
          <strong>Tokens</strong>
        </div>
        <div className="col-sm-9">
          {data?.tokens.length ? (
            <Table className="table align-middle" size="sm">
              <thead>
                <tr>
                  {["Identifier", "Created", ""].map((label) => (
                    <td>{label}</td>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data?.tokens.map(({ created, tokenId }) => (
                  <tr>
                    <td>
                      <Badge bg="secondary">{created}</Badge>
                    </td>
                    <td>
                      <Badge bg="secondary">{tokenId}</Badge>
                    </td>
                    <td>
                      <Button className="float-end" variant="danger" size="sm">
                        Invoke
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <em>No tokens have been issued</em>
          )}
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-sm-3">
          <strong>Teams</strong>
        </div>
        <div className="col-sm-9">
          <p>
            <em>To teams joined</em>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
