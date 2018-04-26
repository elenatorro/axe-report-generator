# AXE Accessibility Report Generator

## Requirements

### Install chromedriver

```
$ npm install -g chromedriver
```

### Install dependencies

```
$ npm install
```

### Configuration

Config file is placed in `settings/config.json`. You can leave it as it is or modify it following aXe core options. More info at https://github.com/dequelabs/axe-core

### Set up the pages you want to report

* Copy `pages-sample.json`:
```
$ cp /settings/pages-sample.json /settings/pages.json
```

For each page, you need to set:
- The name you will give to the report.
- The url.
- The page title. It has to be the same as the one that is present inside the `<title></title>` tag.


### Generate the reports

```
$ npm run generate
```

The reports should have been generated inside the `/reports` directory.
