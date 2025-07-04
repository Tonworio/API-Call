import React from "react";
const ListComponent = ({ listData }) => {
  return (
    <div>
      <ol>
        {listData.map((item, id) => (
          <li key={id}>{item.title}</li>
        ))}
      </ol>
    </div>
  );
};

export default ListComponent;
