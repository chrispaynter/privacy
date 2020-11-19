import fs from 'fs';

const createTemplate = (name:string, description:string, domains:string[], source:string) => `{
  "name": "${name}",
  "description": "Last updated ${(new Date()).toUTCString()}. ${description}",
  "denied-remote-domains": [${domains.join(', ')}],
  "denied-remote-notes": "Rule from ${source}"
}`;

export const ruleSetBuilder = (name:string, description:string, source:string) => {

  let domains:string[] = [];

  const addRule = (domain:string) => {
    domains.push(domain);
  }

  const build = (outputDest:string) => {
    const writer = fs.createWriteStream(outputDest);
    writer.write(createTemplate(name, description, domains, source))
    writer.close();
  }


  return {
    addRule,
    build
  }
}