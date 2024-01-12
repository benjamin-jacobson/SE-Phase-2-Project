import React from "react";

function SummaryList({data}) {

  // TODO add button that changes the completed/incomplete in DB
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