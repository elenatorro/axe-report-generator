const AxeBuilder = require('axe-webdriverjs');
const AxeReports = require('axe-reports');
const webdriver  = require('selenium-webdriver');
const pages      = require('./settings/pages.json');
const config     = require('./settings/config.json');

const driver = new webdriver.Builder().forBrowser(config.browser).build();
const axeBuilder = AxeBuilder(driver).withTags(config.tags);
const WAIT_UNTIL_MS = 1000;

function generateReport () {
  return pages.forEach(generatePageReport);
}

function generatePageReport (page) {
  driver.get(page.url);

  return driver
    .wait(webdriver.until.titleIs(page.title), WAIT_UNTIL_MS)
    .then(exportReport(page.name));
}

function exportReport (filename) {
  axeBuilder.analyze((results) => {
    return AxeReports.processResults(
      results,
      config.format,
      `${config.path}/${filename}`,
      config.create
    );
  });
}

generateReport();
driver.quit();
