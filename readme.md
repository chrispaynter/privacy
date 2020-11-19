# Little Snitch Block Lists

![Build](https://github.com/chrispaynter/little-snitch-block-lists/workflows/Build/badge.svg)

A collection of block list subscriptions to use with Little Snitch.

All automatically updated once a day.

## Lists

### [notracking/hosts-blocklists](https://github.com/notracking/hosts-blocklists)

# Building

Run yarn before building any of the rulesets

```
yarn
```

## Building [notracking/hosts-blocklists](https://github.com/notracking/hosts-blocklists)

No Tracking provides two files, one of hostnames and one of domains.

1. Clean the source files, extracting domains ready for use in a little snitch ruleset:

```
npx ts-node sources/notracking/clean-hostnames.ts
npx ts-node sources/notracking/clean-domains.ts
```

The output files will be create at `./temp/notracking-domains.txt` and `./temp/notracking-hostnames.txt`.

2. Create the little snitch rulesets.

```
npx
```
