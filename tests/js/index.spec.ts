import { expect } from "chai";
import * as fs from "fs";

import defaultDataPath, {
    DATA_PATH,
    getDataPath,
    getRenderedTemplateFile,
    getTemplateContexts,
    readFileFromFixtures,
} from "../../src/js/index";

describe("fixtures index", () => {
    it("exposes a stable data directory path", () => {
        expect(getDataPath()).to.equal(DATA_PATH);
        expect(defaultDataPath).to.equal(DATA_PATH);
        expect(fs.existsSync(DATA_PATH)).to.equal(true);
        expect(fs.statSync(DATA_PATH).isDirectory()).to.equal(true);
        expect(DATA_PATH).to.match(/[/\\]data$/);
    });

    it("readFileFromFixtures reads UTF-8 text from the data tree", () => {
        const raw = readFileFromFixtures("input_templates_rendered/fe-o/default_context.json");
        expect(() => JSON.parse(raw)).to.not.throw();
    });

    it("getRenderedTemplateFile returns the file name and LF-normalized content", () => {
        const { name, content } = getRenderedTemplateFile("default", "simple");
        expect(name).to.equal("simple.j2.in");
        expect(content.length).to.be.greaterThan(0);
        expect(content).to.not.include("\r\n");
    });

    it("getTemplateContexts returns default and constrained JSON objects", () => {
        const contexts = getTemplateContexts();
        expect(contexts).to.have.length(2);
        const names = contexts.map((c) => c.name).sort();
        expect(names).to.deep.equal(["constrained", "default"]);
        contexts.forEach((entry) => {
            expect(entry.context).to.be.an("object");
        });
    });
});
