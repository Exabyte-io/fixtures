import * as fs from "fs";
import * as path from "path";

/**
 * Get the path to the data folder
 * @returns The absolute path to the data folder
 */
export function getDataPath(): string {
    return path.join(__dirname, "../../data");
}

/**
 * The path to the data folder
 */
export const DATA_PATH = path.join(__dirname, "../../data");

/**
 * Read a file from the fixtures data folder
 * @param filePath - Relative path from the data folder
 * @returns The file content as a string
 */
export function readFileFromFixtures(filePath: string): string {
    return fs.readFileSync(path.join(DATA_PATH, filePath), "utf-8");
}

/**
 * Get a rendered template file from the fe-o templates
 * @param contextName - The context name: "default" or "constrained"
 * @param name - The template name (without .j2.in extension)
 * @returns Object with the file name and normalized content
 */
export function getRenderedTemplateFile(
    contextName: "default" | "constrained",
    name: string,
): { name: string; content: string } {
    const fullName = `${name}.j2.in`;
    const filePath = `input_templates_rendered/fe-o/${contextName}/${fullName}`;
    return {
        name: fullName,
        // Normalize line endings for cross-platform compatibility
        content: readFileFromFixtures(filePath).replace(/\r\n/g, "\n"),
    };
}

/**
 * Get template contexts for fe-o templates
 * @returns Array of context objects with name and parsed JSON content
 */
export function getTemplateContexts(): Array<{ name: "default" | "constrained"; context: object }> {
    const names = ["default", "constrained"] as const;
    return names.map((name) => {
        const content = readFileFromFixtures(`input_templates_rendered/fe-o/${name}_context.json`);
        return {
            name,
            context: JSON.parse(content) as object,
        };
    });
}

/**
 * Export the data folder path as the default export
 */
export default DATA_PATH;
