import fs from 'fs';

type RemoteType = "domains" | "hosts";

const createRule = (type: RemoteType, remote: string, source: string) =>
  `
    {
      "action": "deny",
      "notes": "Sourced from ${source}",
      "process": "any",
      "remote-${type}": "${remote}"
    }`;
const createTemplate = (type: RemoteType, name: string, description: string, remotes: string[], source: string, numberOfRules: number) => `{
  "name": "${name}",
  "description": "Last updated ${(new Date()).toUTCString()}. \\n\\n${description} \\n\\nContains ${numberOfRules} ${type}",
  "rules": [
    ${remotes.map(u => createRule(type, u, source)).join(',')}
  ]
}`;


export const ruleSetBuilder = (type: RemoteType, name: string, description: string, source: string) => {

  let domains: string[] = [];
  let domainCount: number = 0;

  const addDeniedDomain = (domain: string) => {
    domains.push(domain);
    domainCount++;
  }

  const build = (outputDest: string) => {
    const writer = fs.createWriteStream(outputDest);
    writer.write(createTemplate(type, name, description, domains, source, domainCount))
    writer.close();
  }


  return {
    addDeniedDomain,
    build
  }
}