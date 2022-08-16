const tasks = (t) => t.join(' && ')

module.exports = {
  hooks: {
    'pre-commit': tasks(['npx prettier --write .', 'git add']),
  },
}
