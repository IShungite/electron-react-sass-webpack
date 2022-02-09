const path = require("path");
const cwd = process.cwd();

const createWebpackAliases = (aliases) => {
  const result = {};
  for (const name in aliases) {
    result[name] = path.join(cwd, aliases[name]);
  }
  return result;
};

// Export aliases
module.exports = createWebpackAliases({
  "@assets": "assets",
  "@components": "src/renderer/components",
});
