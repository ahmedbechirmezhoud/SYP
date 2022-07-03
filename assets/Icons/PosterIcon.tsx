// @ts-nocheck
import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";

export default function PosterIcon({ fill, ...props }) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 459.397 459.397"
      xmlSpace="preserve"
      enableBackground="new 0 0 459.397 459.397"
      {...props}
    >
      <Path
        fill={fill}
        d="M443.13 15.549H252.053c-5.581 0-10.105 4.524-10.105 10.105v72.36l19.744-29.267c.151-.224.311-.437.467-.656V35.759h170.866v237.614H262.158v-90.671c-2.831 2.484-4.516 5.395-10.241 8.95-11.44 16.958-9.191 13.642-9.969 14.733v77.093c0 5.581 4.525 10.105 10.105 10.105h47.739l-27.99 70.757c-2.976 7.524.71 16.035 8.234 19.011 7.523 2.977 16.033-.711 19.011-8.234l32.253-81.535h32.582l32.253 81.535c2.277 5.755 7.792 9.265 13.626 9.265 1.793 0 3.617-.332 5.384-1.031 7.524-2.976 11.211-11.487 8.234-19.011l-27.99-70.757h47.739c5.581 0 10.105-4.524 10.105-10.105V25.654c.002-5.581-4.523-10.105-10.103-10.105z"
      />
      <Path
        fill={fill}
        d="M266.297 134.198l28.904-42.845c3.121-4.626 1.901-10.907-2.726-14.029-4.625-3.12-10.907-1.901-14.029 2.726l-28.779 42.66a36.315 36.315 0 0116.63 11.488z"
      />
      <Circle fill={fill} cx={99.079} cy={37.811} r={37.811} />
      <Path
        fill={fill}
        d="M253.566 147.68c-5.314-8.559-16.562-11.193-25.123-5.876l-36.95 22.942-.172-34.113c-.118-23.687-19.486-42.958-43.174-42.958H50.01c-23.688 0-43.055 19.271-43.174 42.957l-.673 134.033C6.112 274.74 14.239 282.95 24.315 283h.094c10.033 0 18.191-8.108 18.242-18.153l.674-134.033v-.002a3.619 3.619 0 017.239.02l.008 306.671c0 12.091 9.801 21.893 21.893 21.893s21.893-9.801 21.893-21.893V267.239a4.726 4.726 0 019.452 0v170.266c0 12.091 9.802 21.893 21.893 21.893s21.893-9.801 21.893-21.893c-.439-293.783-.401-255.025-.397-306.624a3.819 3.819 0 017.636-.064c0-.001 0 0 0 0l.335 66.722c.072 14.238 15.772 22.919 27.867 15.408l64.654-40.142c8.559-5.317 11.19-16.565 5.875-25.125z"
      />
    </Svg>
  );
}