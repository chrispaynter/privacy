# Privacy

This is my approach to protecting my privacy online.

## Guiding Principles
- Provide privacy protection to all devices.
- Limit the dependency on external systems that we have no control over.
- Limit the amount of device specific configuration required.
- Limit the amount of low level device configuration and maintenance required.
- Maximise automation to keep privacy protection up to date.
- Avoid using browser extensions that can access all web content and history.

## Three Tier Approach

- __DNS Level__
  - Preventing privacy eroding requests from being able to be resolved on any device you use.
- __Operating System Level__
  - Preventing privacy eroding requests being made from the device operating system itself ever leaving the machine.
- __Browser Level__
  - Clean up anything left over from the DNS and Operating System level that effect the browsing experience such us:
    - Removing empty spaces where ads would have shown
    - Prevent GDPR prompts from displaying

### DNS LEVEL

Use [nextdns.io](nextdns.io) to replace DNS lookups for all devices. In my own setup:

- Runs on my MacBook using the [Mac app](https://apps.apple.com/us/app/nextdns/id1464122853?mt=12)
- Runs on my iPhone using the [iOS app](https://apps.apple.com/us/app/nextdns/id1463342498)
- Runs on my home network at the router level, using ipV6 DNS replacement directly in the router firmware.

### Operating System Level

Use [Little Snitch](https://www.obdev.at/products/littlesnitch/index.html) on MacOS in order to provide request blocking at the operating system level. This is handy because sometimes in my line of work I need to use a VPN, which bypasses the use of Next DNS.

Using Little Snitch rule set subscriptions, I can have as close to exact blocking as I get from Next DNS, without having to worry about losing it when I activate the VPN.

### Browser Level





## Resources
https://github.com/el1t/uBlock-Safari/issues/158
