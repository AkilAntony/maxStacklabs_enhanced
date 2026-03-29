import { useMemo, type Dispatch, type SetStateAction } from "react";

const Pagintion = ({
  totalpages,
  currentPage,
  setCurrentPage,
}: {
  totalpages: number;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}) => {
  const handlePageChange = (pageNo: number) => {
    setCurrentPage(pageNo);
  };

  const getPagesTobeRendered = useMemo(() => {
    return [
      currentPage - 2 < 1 ? currentPage + 3 : currentPage - 2,
      currentPage - 1 < 1 ? currentPage + 4 : currentPage - 1,
      currentPage,
      currentPage + 1,
      currentPage + 2,
    ]
      .filter((page) => page > 0 && page <= totalpages)
      .sort((a, b) => a - b);
  }, [currentPage]);

  return (
    <div className="flex flex-wrap gap-3">
      <button
        onClick={() => handlePageChange(1)}
        className="border cursor-pointer py-1 px-2 rounded  disabled:cursor-not-allowed disabled:opacity-50 "
        disabled={currentPage === 1}
      >
        {"<<"}
      </button>
      {getPagesTobeRendered.map((page) => (
        <button
          key={page}
          onClick={() => handlePageChange(page)}
          className={`border cursor-pointer py-1 px-2 md:px-3 ${currentPage === page ? "bg-green-400" : ""}`}
        >
          {page}
        </button>
      ))}

      <button
        className={`border cursor-pointer py-1 px-2 md:px-3 rounded 
          disabled:cursor-not-allowed disabled:opacity-50 `}
        onClick={() => handlePageChange(totalpages)}
        disabled={totalpages === currentPage}
      >
        {">>"}
      </button>
    </div>
  );
};

export default Pagintion;
