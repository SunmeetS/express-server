
import { Builder, By, Key, until, error, promise } from "selenium-webdriver";
import fs from "fs";
import path from "path";

import "chromedriver";

export async function getStandupLinks() {

    try {
        var driver = await new Builder().forBrowser('chrome').build();
        await driver.get("https://www.youtube.com/results?search_query=Standup+Comedy+Hindi&sp=CAMSBggEEAEYAw%253D%253D")

        let i = 0;
        while (i < 30) {
            await driver.findElement(By.css("body")).sendKeys(Key.PAGE_DOWN);
            i++;
        }

        // Scraping the Links

        await driver.wait(until.elementLocated(By.css('.title-and-badge.style-scope.ytd-video-renderer .yt-simple-endpoint.style-scope.ytd-video-renderer')), 5000)

        let links = await driver.findElements(By.css(".title-and-badge.style-scope.ytd-video-renderer .yt-simple-endpoint.style-scope.ytd-video-renderer"));
        let result = await Promise.all(links.map(async (link) => {
            try {
                var date = new Date();
                return await link.getAttribute("href") ? await link.getAttribute("href") : ""
            }
            catch (err) {
                console.log(err)
                return ""
            }
        }))
        return result;


    } catch (error) {
        console.log('Error', error)
        return []
    }

}
