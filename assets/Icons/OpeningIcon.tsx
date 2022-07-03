// @ts-nocheck
import * as React from "react";
import Svg, { Path } from "react-native-svg";

export default function OpeningIcon({ fill, ...props }) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 297 297" {...props}>
      <Path
        fill={fill}
        d="M148.505 61.651c16.998 0 30.826-13.828 30.826-30.826C179.331 13.828 165.503 0 148.505 0c-16.997 0-30.825 13.828-30.825 30.826 0 16.997 13.828 30.825 30.825 30.825zM226.59 151.951H70.41c-4.257 0-7.722 3.464-7.722 7.722v14.621c0 4.257 3.464 7.722 7.722 7.722h156.18c4.257 0 7.722-3.464 7.722-7.722v-14.621c-.001-4.257-3.465-7.722-7.722-7.722zM198.56 194.348H98.44a9.545 9.545 0 00-9.545 9.545v84.371a8.735 8.735 0 008.735 8.735h101.74a8.735 8.735 0 008.735-8.735v-84.371a9.545 9.545 0 00-9.545-9.545zM208.557 102.373a27.132 27.132 0 00-18.686-25.784l-.052-.017-16.304-2.7a2.731 2.731 0 00-3.369 1.677l-18.5 50.76c-1.067 2.928-5.209 2.928-6.276 0l-18.5-50.76a2.731 2.731 0 00-2.564-1.799c-.265 0-17.109 2.818-17.109 2.818-11.239 3.745-18.748 14.164-18.748 25.945v37.106h120.109v-37.246z"
      />
      <Path
        fill={fill}
        d="M155.571 73.105c-.747-.814-1.84-1.224-2.946-1.224h-8.245c-1.105 0-2.198.41-2.946 1.224a3.825 3.825 0 00-.504 4.505l4.407 6.644-2.063 17.405 4.063 10.808c.396 1.087 1.933 1.087 2.33 0l4.063-10.808-2.063-17.405 4.407-6.644a3.823 3.823 0 00-.503-4.505z"
      />
    </Svg>
  );
}