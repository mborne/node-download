const expect = require("chai").expect;

const fs = require('fs');
const download = require('../index');

describe("Test download", function () {
    it("should work for a github readme", async function () {
        let targetPath = await download({
            sourceUrl: 'https://raw.githubusercontent.com/mborne/satis-gitlab/master/README.md',
            targetPath: '/tmp/readme.md',
            downloadIfExists: true
        });
        let content = fs.readFileSync(targetPath,'utf-8');
        expect(content).to.contain("Create SATIS project");
    });
});
