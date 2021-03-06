Package.describe({
  name: 'ostrio:neo4jreactivity',
  summary: 'Meteor.js Neo4j database reactivity layer',
  version: '0.7.2',
  git: 'https://github.com/VeliovGroup/ostrio-Neo4jreactivity.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles(['ostrio:neo4jreactivity_driver.coffee', 'ostrio:neo4jreactivity_collection.coffee'], ['client', 'server']);
  api.addFiles('ostrio:neo4jreactivity_methods.coffee', 'server');
  api.use(['mongo', 'underscore', 'sha', 'coffeescript'], ['client', 'server']);
  api.use(['tracker', 'reactive-var'], 'client');
  api.use('ostrio:neo4jdriver@0.2.12', 'server');
});

Npm.depends({
  neo4j: '1.1.1'
});