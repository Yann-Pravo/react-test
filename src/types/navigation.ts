import { SVGProps } from "react";

type Navigation = {
  name: string;
  href: string;
  icon: (
    props: SVGProps<SVGSVGElement> & {
      title?: string | undefined;
      titleId?: string | undefined;
    }
  ) => JSX.Element;
};

export default Navigation;
