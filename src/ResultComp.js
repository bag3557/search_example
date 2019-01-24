import React from 'react'

const ResultComp = ({countries}) => 
      <ul>
        {countries.map((country, key) => 
          <li key={key}>{country}</li>
        )}
      </ul>

export default ResultComp;