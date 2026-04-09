import React from 'react'

function Fashion({ data }) {
  return (
    <div id="card">
      <img src={data.image} alt={data.title} width={100} height={100} />
      <h4>Title: {data.title}</h4>
      <h4>Price: {data.price}</h4>
      <h4>Description: {data.description}</h4>
    </div>
  )
}

export default Fashion



// import React from 'react'

// function Weather({ data }) {
//   return (
//     <div id="card">
      
//       <h4>Name: {data.name}</h4>
//       <h4>Latitude: {data.latitude}</h4>
//        <h4>Longitude: {data.longitude}</h4>
//        <h4>Elevation: {data.elevation}</h4>
//        <h4>FeatureCode: {data.feature_code}</h4>
//        <h4>CountryCode: {data.country_code}</h4>
//        <h4>Admin1-id: {data.admin1_id}</h4>
//        <h4>Timezone: {data.timezone}</h4>
//           <h4>Population: {data.population}</h4>
//              <h4>CountryId: {data.country_id}</h4>
//                 <h4>Country: {data.country}</h4>

     
//       <h4>Admin1: {data.admin1}</h4>
//     </div>
//   )
// }

// export default Weather
