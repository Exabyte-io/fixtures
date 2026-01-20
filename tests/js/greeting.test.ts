import { expect } from "chai";
import * as fs from "fs";
import * as path from "path";

import { DATA_PATH, getDataPath } from "../../src/js";

describe("fixtures data folder", () => {
    it("should export data folder path", () => {
        const dataPath = getDataPath();
        expect(dataPath).to.be.a("string");
        expect(dataPath).to.equal(DATA_PATH);
    });

    it("should point to existing data folder", () => {
        const dataPath = getDataPath();
        const stats = fs.statSync(dataPath);
        expect(stats.isDirectory()).to.be.true;
    });

    it("should have applications folder", () => {
        const dataPath = getDataPath();
        const applicationsPath = path.join(dataPath, "applications");
        const stats = fs.statSync(applicationsPath);
        expect(stats.isDirectory()).to.be.true;
    });
});
