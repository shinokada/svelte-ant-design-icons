const config = {
  branches: ['main'],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    ["semantic-release/git", {
      "assets": ["dist/*.svelte", "dist/*.svelte.d.ts", "dist/*.js", "dist/*.d.ts"],
      "message": "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
    }],
    '@semantic-release/github'
  ]
};

module.exports = config;
