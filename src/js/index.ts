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
 * Export the data folder path as the default export
 */
export default DATA_PATH;
