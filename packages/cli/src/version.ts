import manifest from "../package.json" with { type: "json" }

/**
 * The iCode Agent product version.
 *
 * Read from this package's manifest rather than declared as a separate
 * constant: the bundler inlines the JSON, so the value survives into the
 * compiled standalone binary and there is no second number to keep in sync.
 *
 * The published product identity (`@icodehq/icode-agent` on npm, the release
 * tag, the changelog) is this package's manifest — `cli.test.ts` reads it back
 * and asserts the constant agrees, so the two cannot drift silently.
 */
export const ICODE_AGENT_VERSION: string = manifest.version
