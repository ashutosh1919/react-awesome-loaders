declare module "zdog" {
  export class Anchor {
    constructor(options?: Record<string, unknown>);
    updateGraph(): void;
    renderGraphSvg(element: Element): void;
  }

  export class Cylinder {
    constructor(options?: Record<string, unknown>);
    rotate: { x: number; y: number; z: number };
    color: string;
  }
}
