import React from "react";
import { useTableData } from "./api/TableDataContext";

const Admin = () => {
  const { tableData } = useTableData();

  return (
    <>
      <div className="px-4 py-2 rounded-lg text-center">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="p-2 bg-slate-50 ">Name</th>
              <th className="p-2 ">Email</th>
              <th className="p-2 bg-slate-50 ">College</th>
              <th className="p-2 ">Year</th>
              <th className="p-2 bg-slate-50 ">Branch</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((rowData, index) => (
              <tr key={index}>
                <td className="p-2 bg-slate-50 ">{rowData.name}</td>
                <td className="p-2 ">{rowData.email}</td>
                <td className="p-2 bg-slate-50 ">{rowData.collegeName}</td>
                <td className="p-2 ">{rowData.year}</td>
                <td className="p-2 bg-slate-50 ">{rowData.branch}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Admin;
