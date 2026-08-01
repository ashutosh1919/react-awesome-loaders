import { useEffect, useState, type ComponentType, type ReactNode } from "react";
import type {
  BoltLoaderProps,
  BookLoaderProps,
  BoxesLoaderProps,
  CircleLoaderProps,
  FlipFlopLoaderProps,
  ScatterBoxLoaderProps,
  SquircleLoaderProps,
  SunspotLoaderProps,
  ThreeDLoaderProps,
  WifiLoaderProps,
  XlviLoaderProps,
} from "react-awesome-loaders";

const loaderConfigs = {
  WifiLoader: {
    component: "WifiLoader",
    props: {
      background: "transparent",
      desktopSize: "150px",
      mobileSize: "150px",
      text: "Wifi Loader",
      backColor: "#E8F2FC",
      frontColor: "#4645F6",
    } satisfies WifiLoaderProps,
  },
  BookLoader: {
    component: "BookLoader",
    props: {
      background: "linear-gradient(135deg, #6066FA, #4645F6)",
      desktopSize: "100px",
      mobileSize: "80px",
      textColor: "#4645F6",
    } satisfies BookLoaderProps,
  },
  XlviLoader: {
    component: "XlviLoader",
    props: {
      boxColors: ["#EF4444", "#F59E0B", "#6366F1"],
      desktopSize: "128px",
      mobileSize: "100px",
    } satisfies XlviLoaderProps,
  },
  SunspotLoader: {
    component: "SunspotLoader",
    props: {
      gradientColors: ["#6366F1", "#E0E7FF"],
      shadowColor: "#3730A3",
      desktopSize: "128px",
      mobileSize: "100px",
    } satisfies SunspotLoaderProps,
  },
  CircleLoader: {
    component: "CircleLoader",
    props: {
      meshColor: "#6366F1",
      lightColor: "#E0E7FF",
      duration: 1.5,
      desktopSize: "90px",
      mobileSize: "64px",
    } satisfies CircleLoaderProps,
  },
  BoltLoader: {
    component: "BoltLoader",
    props: {
      className: "loaderbolt",
      boltColor: "#6366F1",
      backgroundBlurColor: "#E0E7FF",
    } satisfies BoltLoaderProps,
  },
  SquircleLoader: {
    component: "SquircleLoader",
    props: {} satisfies SquircleLoaderProps,
  },
  FlipFlopLoader: {
    component: "FlipFlopLoader",
    props: {
      desktopSize: "128px",
      mobileSize: "128px",
    } satisfies FlipFlopLoaderProps,
  },
  ThreeDLoader: {
    component: "ThreeDLoader",
    props: {
      colorRing1: "#DC2626",
      desktopSize: "100px",
      mobileSize: "64px",
    } satisfies ThreeDLoaderProps,
  },
  BoxesLoader: {
    component: "BoxesLoader",
    props: {
      boxColor: "#6366F1",
      desktopSize: "128px",
      mobileSize: "80px",
    } satisfies BoxesLoaderProps,
  },
  ScatterBoxLoader: {
    component: "ScatterBoxLoader",
    props: {
      primaryColor: "#6366F1",
      background: "#FFFFFF",
    } satisfies ScatterBoxLoaderProps,
  },
} as const;

type LoaderName = keyof typeof loaderConfigs;

interface LoaderProps {
  name: LoaderName;
}

export function Loader({ name }: LoaderProps) {
  const [content, setContent] = useState<ReactNode>(null);

  useEffect(() => {
    let cancelled = false;

    import("react-awesome-loaders").then((loaders) => {
      if (cancelled) return;

      const config = loaderConfigs[name];
      const Component = loaders[config.component] as ComponentType<
        typeof config.props
      >;
      setContent(<Component {...config.props} />);
    });

    return () => {
      cancelled = true;
    };
  }, [name]);

  return <div className="loader-demo">{content}</div>;
}

const loaderNames = Object.keys(loaderConfigs) as LoaderName[];

export function RandomLoader() {
  const [name] = useState(
    () => loaderNames[Math.floor(Math.random() * loaderNames.length)],
  );

  return <Loader name={name} />;
}
