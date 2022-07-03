// @ts-nocheck
import * as React from "react";
import Svg, { Path } from "react-native-svg";

export default function DepartureIcon({ fill, ...props }) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 296.781 296.781"
      xmlSpace="preserve"
      enableBackground="new 0 0 296.781 296.781"
      {...props}
    >
      <Path
        fill={fill}
        d="M46.881 157.053l-35.494-16.586a8.002 8.002 0 00-8.966 1.514 8.002 8.002 0 00-1.759 8.921l7.613 17.53 38.606-11.379z"
      />
      <Path
        fill={fill}
        d="M110.863 147.703l-90.246 26.598a7.999 7.999 0 00.325 15.436l97.355 24.304a7.996 7.996 0 004.188-.085l150.332-44.052c17.724-5.281 27.846-23.998 22.564-41.725-4.207-14.109-17.42-23.965-32.132-23.965-3.238 0-6.465.473-9.567 1.397l-71.005 20.927-12.478-5.83-80.148-37.452a8 8 0 00-10.421 3.438l-5.553 10.252a8 8 0 00.964 9.021l29.31 34.149 6.512 7.587z"
      />
    </Svg>
  );
}
