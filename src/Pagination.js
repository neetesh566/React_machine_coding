import { useState } from "react";

function Pagination() {
  const items = [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6",
    "Item 7",
    "Item 8",
    "Item 9",
    "Item 10",
  ];

  const itemsperpage = 2;
  const [page, setpage] = useState(1);

  const startindex = (page - 1) * itemsperpage;
  const endindex = startindex + itemsperpage;

  const currentitems = items.slice(startindex, endindex);

  const totalpages = Math.ceil(items.length / itemsperpage);

  const handleprev = () => {
    if (page > 1) setpage(page - 1);
  };

  const handlenext = () => {
    if (page < totalpages) setpage(page + 1);
  };

  return (
    <div>
      <h2> Simple Page </h2>
      <ul>
        {currentitems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <div>
        <button onClick={handleprev} disabled={page === 1}>
          {" "}
          prev
        </button>

        <button onClick={handlenext} disabled={page === totalpages}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Pagination;
