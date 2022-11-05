
let { Builder, By, Key, until, error, promise } = require("selenium-webdriver");
let fs = require("fs");
let path = require("path")

require("chromedriver")

async function getStandupLinks() {

    try {
        var driver = await new Builder().forBrowser('chrome').build();
        await driver.get("https://www.youtube.com/results?search_query=Standup+Comedy+Hindi&sp=CAMSBggEEAEYAw%253D%253D")

        // setting filters
        // await driver.wait(until.elementLocated(By.className('yt-spec-button-shape-next yt-spec-button-shape-next--text yt-spec-button-shape-next--mono yt-spec-button-shape-next--size-m yt-spec-button-shape-next--icon-leading yt-spec-button-shape-next--align-by-text')), 5000)
        // await driver.findElement(By.className("yt-spec-button-shape-next yt-spec-button-shape-next--text yt-spec-button-shape-next--mono yt-spec-button-shape-next--size-m yt-spec-button-shape-next--icon-leading yt-spec-button-shape-next--align-by-text")).click()
        // await driver.findElement(By.css("div[title='Search for This month']")).click()

        // await driver.wait(until.elementLocated(By.className('yt-spec-button-shape-next yt-spec-button-shape-next--text yt-spec-button-shape-next--mono yt-spec-button-shape-next--size-m yt-spec-button-shape-next--icon-leading yt-spec-button-shape-next--align-by-text')), 5000)
        // await driver.findElement(By.className("yt-spec-button-shape-next yt-spec-button-shape-next--text yt-spec-button-shape-next--mono yt-spec-button-shape-next--size-m yt-spec-button-shape-next--icon-leading yt-spec-button-shape-next--align-by-text")).click()
        // await driver.findElement(By.css("div[title='Search for 4–20 minutes']")).click()

        // await driver.wait(until.elementLocated(By.className('yt-spec-button-shape-next yt-spec-button-shape-next--text yt-spec-button-shape-next--mono yt-spec-button-shape-next--size-m yt-spec-button-shape-next--icon-leading yt-spec-button-shape-next--align-by-text')), 5000)
        // await driver.findElement(By.className("yt-spec-button-shape-next yt-spec-button-shape-next--text yt-spec-button-shape-next--mono yt-spec-button-shape-next--size-m yt-spec-button-shape-next--icon-leading yt-spec-button-shape-next--align-by-text")).click()
        // await driver.findElement(By.css("div[title='Sort by view count']")).click()

        let i = 0;
        while (i < 30) {
            await driver.findElement(By.css("body")).sendKeys(Key.PAGE_DOWN);
            i++;
        }

            // Scraping the Links

            await driver.wait(until.elementLocated(By.css('.title-and-badge.style-scope.ytd-video-renderer .yt-simple-endpoint.style-scope.ytd-video-renderer')), 5000)

            let links = await driver.findElements(By.css(".title-and-badge.style-scope.ytd-video-renderer .yt-simple-endpoint.style-scope.ytd-video-renderer"));
            // console.log(links)
            let link = await links[13].getAttribute("href")
            // console.log(link);

            let result = await Promise.all(links.map(async (link) => {
                try {
                    var date = new Date();
                    var current_date = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
                    return await link.getAttribute("href") ? {
                        date: current_date,
                        url: await link.getAttribute("href")
                    } : ""
                }
                catch (err) {
                    return {}
                }
            }))
            console.log("result.length",result.length)
            return result;


    } catch (error) {
        // console.log(error)
        // getStandupLinks()
        return {}
    }

}

module.exports = {
    getStandupLinks
}