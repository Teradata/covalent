module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-custom-properties')({
      preserve: false, // Set to false to replace the variables with their values
    }),
    require('autoprefixer'),
    // Custom plugin to add comment
    {
      postcssPlugin: 'add-comment',
      Once(root, { Comment }) {
        const comment = new Comment({ text: 'This is a generated CSS file' });
        root.prepend(comment);
      },
    },
  ],
};

module.exports.postcss = true;
