import type { GeneratorConfig } from "./tools/generator/config.js";

/**
 * Point `spec` at your own document and run `npm run generate`.
 *
 * It ships pointed at the fixture the generator's own tests use, so the
 * command works in a fresh copy of this template and you can read its output
 * in `src/resources/users.ts` before replacing it.
 */
const config: GeneratorConfig = {
	spec: "https://raw.githubusercontent.com/grMLEqomlkkU5Eeinz4brIrOVCUCkJuN/strava-dung-beetle/refs/heads/master/strava3.json",

	// Names the path rules read wrongly, and two endpoints that would collide.
	names: {},
};

export default config;
