Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const fs = require("fs");
const path = require("path");
const js_1 = require("../../src/js");

describe("fixtures data folder", () => {
    it("should export data folder path", () => {
        const dataPath = (0, js_1.getDataPath)();
        (0, chai_1.expect)(dataPath).to.be.a("string");
        (0, chai_1.expect)(dataPath).to.equal(js_1.DATA_PATH);
    });
    it("should point to existing data folder", () => {
        const dataPath = (0, js_1.getDataPath)();
        const stats = fs.statSync(dataPath);
        (0, chai_1.expect)(stats.isDirectory()).to.be.true;
    });
    it("should have applications folder", () => {
        const dataPath = (0, js_1.getDataPath)();
        const applicationsPath = path.join(dataPath, "applications");
        const stats = fs.statSync(applicationsPath);
        (0, chai_1.expect)(stats.isDirectory()).to.be.true;
    });
});
