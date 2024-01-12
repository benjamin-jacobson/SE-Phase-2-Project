import React from "react";
import SummaryList from "./SummaryList";

function Summary({data}) {


  return (
    <div>
      <SummaryList data={data} />
    </div>
  );
}

export default Summary;