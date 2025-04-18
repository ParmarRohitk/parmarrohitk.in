declare module "malihu-custom-scrollbar-plugin" {
  interface mCustomScrollbarOptions {
    axis?: "x" | "y" | "xy";
    theme?: string;
    keyboard?: { enable: boolean; scrollType?: string };
    advanced?: { autoExpandHorizontalScroll: boolean };
    mouseWheel?: { scrollAmount: number };
    callbacks?: {
      whileScrolling?: () => void;
    };
  }

  interface JQuery {
    mCustomScrollbar(options?: mCustomScrollbarOptions): JQuery<HTMLElement>;
  }
}
