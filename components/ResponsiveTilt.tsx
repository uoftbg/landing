/**
 * A wrapper component for the react-parallax-tilt library that automatically
 * disables the tilt effect on mobile devices.
 */
import React from "react";
import Tilt from "react-parallax-tilt";

import { isMobile } from "../utils/responsive";

/**
 * Props for the ResponsiveTilt component.
 *
 * @property {React.ReactNode} children - The content of the section
 * Any other props will be passed to the Tilt component.
 */
interface ResponsiveTiltProps {
  children: React.ReactNode;
  [key: string]: any;
}

export default function ResponsiveTilt({
  children,
  ...tiltProps
}: ResponsiveTiltProps) {
  return isMobile() ? (
    <div>{children}</div>
  ) : (
    <Tilt {...tiltProps}>{children}</Tilt>
  );
}
