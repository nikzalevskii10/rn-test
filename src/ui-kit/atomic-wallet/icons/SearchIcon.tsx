import React from 'react';
import Svg, {ClipPath, Defs, G, Path, Rect} from 'react-native-svg';

export const SearchIcon = () => {
  return (
    <Svg width="17" height="17" viewBox="0 0 17 17" fill="white">
      <G clipPath="url(#clip0_1364_7183)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.66671 0C2.98479 0 0 2.98479 0 6.66671C0 10.3486 2.98479 13.3334 6.66671 13.3334C7.97494 13.3334 9.19515 12.9566 10.2247 12.3056L14.6262 16.7071L16.0405 15.2929L11.7398 10.9922C12.7335 9.82793 13.3334 8.31738 13.3334 6.66671C13.3334 2.98479 10.3486 0 6.66671 0ZM2 6.66671C2 4.08936 4.08936 2 6.66671 2C9.24406 2 11.3334 4.08936 11.3334 6.66671C11.3334 9.24406 9.24406 11.3334 6.66671 11.3334C4.08936 11.3334 2 9.24406 2 6.66671Z"
          fill="#7A859F"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1364_7183">
          <Rect width="17" height="17" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
