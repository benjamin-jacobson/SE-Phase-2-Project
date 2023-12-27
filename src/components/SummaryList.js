import React from "react";

function SummaryList({data}) {

const data_bullets = data.map((i) => {
  return (
    <ul><li>{i.name}</li></ul>

)})

return (
  <div>
    {data_bullets}
  </div>
)
}
export default SummaryList;



// import React from "react";

// function SummaryList({data}) {

// const data_bullets = data.map((i) => {
//   return (
//   <p>{i.name}</p>
// )})

// return (
//   <div>
//     {data_bullets}
//   </div>
// )
// }
// export default SummaryList;