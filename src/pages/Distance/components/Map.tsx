import React, { useEffect } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
} from 'react-simple-maps';

import { capFirstLetter } from '../../../utils/functions';

const Map = ({ selectedUsers, setSnackBarOpen }) => {
  useEffect(() => {
    setTimeout(() => {
      setSnackBarOpen(true);
    }, 1500);
  }, []);

  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      style={{ width: '100%', height: '90%' }}
      projectionConfig={{
        rotate: [0, 0, 0],
        center: [0, 0],
        scale: 150,
      }}
    >
      <Geographies
        geography="/features.json"
        fill="#245a53"
        stroke="#111111"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      {selectedUsers?.map((user, i) => (
        <Annotation
          key={i}
          subject={[
            parseFloat(user.address.geolocation.lat),
            parseFloat(user.address.geolocation.long),
          ]}
          dx={-90}
          dy={-30}
          connectorProps={{
            stroke: 'rgb(172, 162, 139)',
            strokeWidth: 3,
            strokeLinecap: 'round',
          }}
        >
          <text
            x="-8"
            y="-10"
            fontFamily="Amatic SC"
            fontSize={30}
            textAnchor="end"
            alignmentBaseline="middle"
            fill="rgb(172, 162, 139)"
          >
            {capFirstLetter(user.address.city)}
          </text>
        </Annotation>
      ))}
    </ComposableMap>
  );
};

export default Map;
