import fs from 'fs';

type RuleType = "domains" | "hosts";

const createTemplate = (type: RuleType, name:string, description:string, domains:string[], source:string) => `{
  "name": "${name}",
  "description": "Last updated ${(new Date()).toUTCString()}. \\n\\n ${description}",
  "denied-remote-${type}": [${domains.map(u => `"${u}"`).join(', ')}],
  "denied-remote-notes": "Rule from ${source}"
}`;


export const ruleSetBuilder = (type: RuleType, name:string, description:string, source:string) => {

  let domains:string[] = [];

  const addDeniedDomain = (domain:string) => {
    domains.push(domain);
  }

  const build = (outputDest:string) => {
    const writer = fs.createWriteStream(outputDest);
    writer.write(createTemplate(type, name, description, domains, source))
    writer.close();
  }


  return {
    addDeniedDomain,
    build
  }
}