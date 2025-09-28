import { useTSLazy } from "@devwareng/vanilla-ts";

const Hero = useTSLazy(() => import("./home/Hero"));

export { Hero }