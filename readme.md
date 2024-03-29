# Privacy

![Build](https://github.com/chrispaynter/little-snitch-block-lists/workflows/Build/badge.svg)

[My approach to privacy](./approach.md)

A collection of auto updating [Little Snitch](https://www.obdev.at/products/littlesnitch/index.html) rule group subscriptions for protecting your privacy.

Lists are updated **every night at midnight**.

> Note, this is a new list source, so more lists will be added over time.

## How to use

All of the lists are precompiled into Little Snitche's [lsrules format](https://help.obdev.at/littlesnitch4/ref-lsrules-file-format), and are place in the `./dist` folder of this repository, automatically once a day.

### Installing 

- Open Little Snitch Rules
- File > New Rule Group Selection
- Paste one of the list subscription URLs below into the prompt

From here you can set some other parameters, such as frequency for Little Snitch to update.

As our lists update once a day, it's a good idea to set your update frequency to daily.

## Lists Subscription URLs

The following lists are being transformed for use with Little Snitch. Copy the subscription URL for use in Little Snitch.

| Subscription URL                                             | Original Source                                              |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [No Tracking - Domains List](https://raw.githubusercontent.com/chrispaynter/little-snitch-rules/master/dist/notracking-domains.lsrules) | [notracking/hosts-blocklists](https://github.com/notracking/hosts-blocklists) |
| [No Tracking - Hostnames List](https://raw.githubusercontent.com/chrispaynter/little-snitch-rules/master/dist/notracking-hostnames.lsrules) | [notracking/hosts-blocklists](https://github.com/notracking/hosts-blocklists) |
| [Chris Paynter - Domains List](https://raw.githubusercontent.com/chrispaynter/privacy/master/dist/chrispaynter-domains.lsrules) | My own personal list of domains. I populate this based on domains I see in Little Snitch (on manual inspection) that I want blocked, but aren't blocked by my other lists. |
| [Chris Paynter - Tools](https://raw.githubusercontent.com/chrispaynter/privacy/master/dist/chrispaynter-tools.lsrules) | A list of tools that I have to develop with in my day to day work, but that I know have the ability to track me. I have these in a separate list so that I can toggle it on and off when I need to use them. |

## Building manually

```
npm install;
npm run notracking;
```
