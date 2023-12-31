import React from "react";
import SummaryList from "./SummaryList";

function Summary({data}) {


  return (
    <div>
      <header>
        <h1>Summary</h1>
        {/* <p>Hi {data}</p> */}
      </header>
      <SummaryList data={data} />
    </div>
  );
}

export default Summary;