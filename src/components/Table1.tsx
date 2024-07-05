import { Typography } from "@material-ui/core";
import { DataGrid } from "@mui/x-data-grid";
import axios, { AxiosResponse } from "axios";
import { useState, useEffect } from "react";

interface Users {
  userId: number;
  id: number;
  title: string;
  body: string;
}
const Table1 = () => {
  const [users, setUsers] = useState<Users[]>([]);
  useEffect(() => {
    const fetchdata = async () => {
      const response: AxiosResponse<Users[]> = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setUsers(response.data);
    };
    fetchdata();
  }, []);
  const columns = [
    { field: "userId", headerName: "User ID", width: 100 },
    { field: "id", headerName: "ID", width: 100 },
    { field: "title", headerName: "Title", width: 300 },
    { field: "body", headerName: "Body", flex: 1 },
  ];
  return (
    <>
      <Typography variant="h5">Table1</Typography>
      <div style={{ height: 500, width: "95%", margin: "auto" }}>
        <DataGrid rows={users} columns={columns} />
      </div>
    </>
  );
};

export default Table1;
