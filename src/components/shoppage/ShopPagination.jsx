import { useNavigate, useParams } from "react-router";

function ShopPagination() {
  const { pageNumber } = useParams();
  const currentPage = Number(pageNumber);
  const navigate = useNavigate();

  const handleClick = (newPage) => {
    navigate("/shop/" + newPage)
  }

  return (
    <div>
      <button>Previous</button>
      <button onClick={() => handleClick(currentPage + 1)}>Next</button>
    </div>
  )
}

export default ShopPagination;