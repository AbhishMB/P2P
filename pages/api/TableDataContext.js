import { createContext, useContext, useState } from "react";

const TableDataContext = createContext();

export const useTableData = () => useContext(TableDataContext);

export const TableDataProvider = ({ children }) => {
  const [tableData, setTableData] = useState([]);

  const addTableData = (formData) => {
    setTableData((prevTableData) => [...prevTableData, formData]);
  };

  return (
    <TableDataContext.Provider value={{ tableData, addTableData }}>
      {children}
    </TableDataContext.Provider>
  );
};
