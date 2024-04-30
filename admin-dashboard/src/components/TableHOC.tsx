import { TbSortAscendingNumbers, TbSortDescendingNumbers } from "react-icons/tb";
import {
  useTable,
  Column,
  TableOptions,
  useSortBy,
  usePagination
} from "react-table";

function TableHOC<T extends Object>(
  columns: Column<T>[],
  data: T[],
  containerClassname: string,
  heading: string,
  showPagination: boolean = false
) {
  return function HOC() {
    const options: TableOptions<T> = {
      columns,
      data,
      initialState: { pageSize: 4 },
    };
    const { getTableProps, getTableBodyProps, headerGroups, page, prepareRow, nextPage, pageCount, gotoPage, state:{pageIndex}, previousPage, canNextPage, canPreviousPage } =
      useTable(options, useSortBy, usePagination);

    return (
      <>
        <div className={containerClassname}>
          <h2 className="heading">{heading}</h2>
          <table className="table" {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
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
              {page.map((row) => {
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
          {
            showPagination && (
              <div className="table-pagination">
                <button disabled={!canPreviousPage} onClick={() => gotoPage(0)}>First Page</button>
                {" "}
                <button disabled={!canPreviousPage} onClick={previousPage}>Previous</button>
                {" "}
                <span>{`${pageIndex + 1} of ${pageCount}`}</span>
                {" "}
                <button disabled={!canNextPage} onClick={nextPage}>Next</button>
                {" "}
                <button disabled={!canNextPage} onClick={() => gotoPage(pageCount - 1)}>Last Page</button>
              </div>
            )
          }
        </div>
      </>
    );
  };
}

export default TableHOC;
