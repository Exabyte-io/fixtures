"use strict";
var __createBinding =
    (this && this.__createBinding) ||
    (Object.create
        ? function (o, m, k, k2) {
              if (k2 === undefined) k2 = k;
              var desc = Object.getOwnPropertyDescriptor(m, k);
              if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
                  desc = {
                      enumerable: true,
                      get: function () {
                          return m[k];
                      },
                  };
              }
              Object.defineProperty(o, k2, desc);
          }
        : function (o, m, k, k2) {
              if (k2 === undefined) k2 = k;
              o[k2] = m[k];
          });
var __setModuleDefault =
    (this && this.__setModuleDefault) ||
    (Object.create
        ? function (o, v) {
              Object.defineProperty(o, "default", { enumerable: true, value: v });
          }
        : function (o, v) {
              o["default"] = v;
          });
var __importStar =
    (this && this.__importStar) ||
    function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    };
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTemplateContexts =
    exports.getRenderedTemplateFile =
    exports.readFileFromFixtures =
    exports.DATA_PATH =
    exports.getDataPath =
        void 0;
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
/**
 * Get the path to the data folder
 * @returns The absolute path to the data folder
 */
function getDataPath() {
    return path.join(__dirname, "../../data");
}
exports.getDataPath = getDataPath;
/**
 * The path to the data folder
 */
exports.DATA_PATH = path.join(__dirname, "../../data");
/**
 * Read a file from the fixtures data folder
 * @param filePath - Relative path from the data folder
 * @returns The file content as a string
 */
function readFileFromFixtures(filePath) {
    return fs.readFileSync(path.join(exports.DATA_PATH, filePath), "utf-8");
}
exports.readFileFromFixtures = readFileFromFixtures;
/**
 * Get a rendered template file from the fe-o templates
 * @param contextName - The context name: "default" or "constrained"
 * @param name - The template name (without .j2.in extension)
 * @returns Object with the file name and normalized content
 */
function getRenderedTemplateFile(contextName, name) {
    const fullName = `${name}.j2.in`;
    const filePath = `input_templates_rendered/fe-o/${contextName}/${fullName}`;
    return {
        name: fullName,
        // Normalize line endings for cross-platform compatibility
        content: readFileFromFixtures(filePath).replace(/\r\n/g, "\n"),
    };
}
exports.getRenderedTemplateFile = getRenderedTemplateFile;
/**
 * Get template contexts for fe-o templates
 * @returns Array of context objects with name and parsed JSON content
 */
function getTemplateContexts() {
    const names = ["default", "constrained"];
    return names.map((name) => {
        const content = readFileFromFixtures(`input_templates_rendered/fe-o/${name}_context.json`);
        return {
            name,
            context: JSON.parse(content),
        };
    });
}
exports.getTemplateContexts = getTemplateContexts;
/**
 * Export the data folder path as the default export
 */
exports.default = exports.DATA_PATH;
