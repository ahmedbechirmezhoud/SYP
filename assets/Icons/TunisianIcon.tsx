// @ts-nocheck
import * as React from "react";
import Svg, { Path } from "react-native-svg";

export default function TunisianIcon({ fill, ...props }) {
  return (
    <Svg
      width="64px"
      height="64px"
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="iconify iconify--emojione-monotone"
      {...props}
    >
      <Path
        d="M25.201 32c0-5.633 4.565-10.2 10.198-10.2a10.15 10.15 0 016.892 2.697c-2.318-3.175-6.059-5.246-10.291-5.246-7.041 0-12.749 5.708-12.749 12.749S24.959 44.749 32 44.749c4.234 0 7.976-2.073 10.294-5.25a10.147 10.147 0 01-6.895 2.699c-5.632 0-10.198-4.565-10.198-10.198"
        fill={fill}
      />
      <Path
        d="M36.302 29.221l-3.267-4.496v5.558L27.75 32l5.285 1.717v5.558l3.267-4.496 5.286 1.717L38.32 32l3.268-4.496z"
        fill={fill}
      />
      <Path
        d="M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30 30-13.432 30-30S48.568 2 32 2zm0 46.997c-9.388 0-16.999-7.609-16.999-16.997S22.612 15.001 32 15.001 48.997 22.612 48.997 32 41.388 48.997 32 48.997z"
        fill={fill}
      />
    </Svg>
  );
}
