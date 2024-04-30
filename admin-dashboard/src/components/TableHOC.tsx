import { TbSortAscendingNumbers, TbSortDescendingNumbers } from "react-icons/tb";
import {
  useTable,
  Column,
  TableOptions,
  useSortBy,
} from "react-table";

function TableHOC<T extends Object>(
  columns: Column<T>[],
  data: T[],
  containerClassname: string,
  heading: string
) {
  return function HOC() {
    const options: TableOptions<T> = {
      columns,
      data,
    };
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
      useTable(options, useSortBy);

    return (
      <>
        <div className={containerClassname}>
          <h2 className="heading">{heading}</h2>
          <table className="table" {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column: any) => (
                    <th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                    >
                      {column.render("Header")}
                      {column.isSorted && (
                        <span>
                          {" "}
                          {column.isSortedDesc ? (
                            <TbSortDescendingNumbers />
                          ) : (
                            <TbSortAscendingNumbers />
                          )}
                        </span>
                      )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map((row) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      return (
                        <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </>
    );
  };
}

export default TableHOC;
