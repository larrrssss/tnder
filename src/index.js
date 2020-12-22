const tnder = (template, data) => template.replace(/{{(.*?)}}/g, (match) => data[match.split(/{{|}}/).filter(Boolean)[0].trim()] || match);

module.exports = tnder;
