import React from "react";

function SummaryList({data}) {

const data_bullets = data.map((i) => {
  return (
    <ul><li>{i.goal}</li></ul>

)})

return (
  <div>
    {data_bullets}
  </div>
)
}
export default SummaryList;