exports.config = {
  bundles: [
    {components: ['my-app']},
    {components: ['page-home','page-contact']}
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
