import React, { useEffect, useState } from "react";
import {
  Badge,
  Button,
  FormControl,
  FormSelect,
  Pagination,
  Table,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useTable, useSortBy, usePagination } from "react-table";
import { useGetAllUsersQuery } from "../../api/usersApi";

//TODO: add pagination, search
const UsersTable = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  const onSearchChange = (e) => {
    const { value } = e.target;
    setData(
      value.toLowerCase().length
        ? result?.users.filter(({ username }) =>
            username
              ? username.toLowerCase().includes(value.toLowerCase())
              : username
          )
        : result?.users
    );
  };

  const columns = React.useMemo(
    () => [
      {
        Header: "ID",
        accessor: "userId",
      },
      {
        Header: "Image",
        accessor: "image",
      },
      {
        Header: "Username",
        accessor: "username",
      },
      {
        Header: "Phone Number",
        accessor: "phoneNumber",
      },
      {
        Header: "Entered SMS code",
        accessor: "phoneNumberConfirmed",
      },
      {
        Header: "#Logins",
        accessor: "loginCount",
      },
      {
        Header: "Picked players",
        accessor: "picksCount",
      },
      {
        Header: "Matches",
        accessor: "matchesWithPickedPlayerCount",
      },
      {
        Header: "Last Login",
        accessor: "lastLogin",
      },
      {
        Header: "Registration Date",
        accessor: "createdAtISO8601",
      },
    ],
    []
  );

  const { data: result, isLoading, isFetching } = useGetAllUsersQuery();

  useEffect(() => {
    setData(!(isLoading || isFetching) ? result?.users : []);
  }, [result]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: {
        pageIndex: 0,
      },
    },
    useSortBy,
    usePagination
  );

  return (
    <>
      <div className="row mb-2 d-flex align-items-center">
        <div className="col-sm-6">
          Show
          <FormSelect
            className="mx-1 d-inline-block"
            style={{ width: "75px" }}
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
            }}
          >
            {[10, 25, 50, 100].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                {pageSize}
              </option>
            ))}
          </FormSelect>
          entries
        </div>
        <div className="col-sm-6">
          <div className="float-end d-flex align-items-center">
            <span style={{ marginRight: "8px" }}>Search:</span>
            <FormControl onChange={onSearchChange} type="text" />
          </div>
        </div>
      </div>
      <Table
        className="align-middle"
        {...getTableProps()}
        size="sm"
        striped
        bordered
        hover
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...(column.Header === "Image"
                    ? column.getHeaderProps()
                    : column.getHeaderProps(column.getSortByToggleProps()))}
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>
                      {cell.column.id === "image" && (
                        <img
                          className="rounded-circle"
                          style={{ height: "50px" }}
                          src={cell.value}
                          alt="profile image"
                        />
                      )}
                      {cell.column.id === "phoneNumberConfirmed" &&
                        cell.value.toString()}
                      {(cell.column.id === "userId" ||
                        cell.column.id === "username" ||
                        cell.column.id === "createdAtISO8601" ||
                        cell.column.id === "picksCount" ||
                        cell.column.id === "matchesWithPickedPlayerCount" ||
                        cell.column.id === "lastLogin" ||
                        cell.column.id === "phoneNumber") &&
                        cell.value}
                      {cell.column.id === "loginCount" && (
                        <Badge bg="secondary">{cell.value}</Badge>
                      )}
                    </td>
                  );
                })}
                <td>
                  <Button
                    onClick={() =>
                      navigate(`/admin/users/${row.values.userId}`)
                    }
                    size="sm"
                    className="w-100"
                  >
                    View details
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <div className="row mb-2 d-flex align-items-center">
        <div className="col-sm-6">
          Showing 1 to {pageSize} of {data.length}
        </div>
        <div className="col-sm-6">
          <div className="float-end">
            <Pagination className="d-flex align-items-center ">
              <Pagination.First
                onClick={() => gotoPage(0)}
                disabled={!canPreviousPage}
              />
              <Pagination.Prev
                onClick={() => previousPage()}
                disabled={!canPreviousPage}
              />
              {Array.from({ length: pageCount }).map((_, idx) => (
                <Pagination.Item
                  key={idx}
                  active={idx === pageIndex}
                  onClick={() => gotoPage(idx)}
                >
                  {idx + 1}
                </Pagination.Item>
              ))}
              <Pagination.Next
                onClick={() => nextPage()}
                disabled={!canNextPage}
              />
              <Pagination.Last
                onClick={() => gotoPage(pageCount - 1)}
                disabled={!canNextPage}
              />
            </Pagination>
          </div>
        </div>
      </div>
    </>
  );
};

export default UsersTable;
