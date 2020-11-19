# Little Snitch Block Lists

![Build](https://github.com/chrispaynter/little-snitch-block-lists/workflows/Build/badge.svg)

A collection of auto updating [Little Snitch](https://www.obdev.at/products/littlesnitch/index.html) rule group subscriptions for protecting your privacy.

Lists are updated **every night at midnight**.

> Note, this is a new list source, so more lists will be added over time.

## How to use

All of the lists are precompiled into Little Snitche's [lsrules format](https://help.obdev.at/littlesnitch4/ref-lsrules-file-format), and are place in the `./dist` folder of this repository, automatically once a day.

### Installing 

- Open Little Snitch Rules
- File > New Rule Group Selection
- Paste one of the list subscription URLs below into the prompt

From here you can set some other parameters, such as frequency for Little Snitch to update. As we only update our lists once a day, there's no need to update any less that 24 hours via Little Snitch.

## Lists Subscription URLs

The following lists are being transformed for use with Little Snitch

| Subscription URL                                             | Original Source                                              |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [No Tracking - Domains List](https://raw.githubusercontent.com/chrispaynter/little-snitch-block-lists/master/dist/notracking-domains.lsrules) | [notracking/hosts-blocklists](https://github.com/notracking/hosts-blocklists) |
| [No Tracking - Hostnames List](https://github.com/chrispaynter/little-snitch-block-lists/blob/master/dist/notracking-hostnames.lsrules) | notracking/hosts-blocklists                                  |

## Building manually

```
npm install;
npm run notracking;
```
