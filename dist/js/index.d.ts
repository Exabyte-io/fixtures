/**
 * Get the path to the data folder
 * @returns The absolute path to the data folder
 */
export declare function getDataPath(): string;
/**
 * The path to the data folder
 */
export declare const DATA_PATH: string;
/**
 * Read a file from the fixtures data folder
 * @param filePath - Relative path from the data folder
 * @returns The file content as a string
 */
export declare function readFileFromFixtures(filePath: string): string;
/**
 * Get a rendered template file from the fe-o templates
 * @param contextName - The context name: "default" or "constrained"
 * @param name - The template name (without .j2.in extension)
 * @returns Object with the file name and normalized content
 */
export declare function getRenderedTemplateFile(
    contextName: "default" | "constrained",
    name: string,
): {
    name: string;
    content: string;
};
/**
 * Get template contexts for fe-o templates
 * @returns Array of context objects with name and parsed JSON content
 */
export declare function getTemplateContexts(): Array<{
    name: "default" | "constrained";
    context: object;
}>;
/**
 * Export the data folder path as the default export
 */
export default DATA_PATH;
