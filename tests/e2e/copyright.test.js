const timeout = process.env.SLOWMO ? 30000 : 10000;

beforeAll(async () => {
    await page.goto(URL, {waitUntil: 'domcontentloaded'});
});

describe('Is copyright is at bottom of page?', () => {
    test('Copyright', async () => {
        const pHandle = await page.$("#copyright"); // will be null if paragraph doesn't exist
        const copyright = await page.evaluate(pHandle => pHandle.innerHTML, pHandle);
        // check if it's what we want
        expect(copyright).toBe("Copyright ©2021");
    }, timeout);
});