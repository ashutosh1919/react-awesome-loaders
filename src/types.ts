export interface LoaderSizeProps {
  className?: string;
  size?: string;
  desktopSize?: string;
  mobileSize?: string;
}

export function resolveLoaderSize(
  size: string,
  desktopSize: string,
  mobileSize: string,
  isDesktopOrLaptop: boolean,
  isTabletOrMobile: boolean,
): number {
  if (isDesktopOrLaptop) {
    return desktopSize !== "" ? parseFloat(desktopSize) : parseFloat(size) * 2;
  }
  if (isTabletOrMobile) {
    return mobileSize !== "" ? parseFloat(mobileSize) : parseFloat(size);
  }
  // SSR / no matchMedia: neither query matched — use the base size
  return parseFloat(size);
}

export type { BoltLoaderProps } from "./boltLoader/boltloader";
export type { BookLoaderProps } from "./bookLoader/bookloader";
export type { BoxesLoaderProps } from "./boxesLoader/boxesloader";
export type { CircleLoaderProps } from "./circleLoader/circleloader";
export type { FlipFlopLoaderProps } from "./flipFlopLoader/flipfloploader";
export type { ScatterBoxLoaderProps } from "./scatterBoxLoader/scatterboxloader";
export type { SquircleLoaderProps } from "./squircleLoader/squircleloader";
export type { SunspotLoaderProps } from "./sunspotLoader/sunspotloader";
export type { ThreeDLoaderProps } from "./threedLoader/threedloader";
export type { WifiLoaderProps } from "./wifiLoader/wifiloader";
export type { XlviLoaderProps } from "./xlviLoader/xlviloader";
