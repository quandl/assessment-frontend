import Component from '@ember/component';

export default Component.extend({
  actions: {
    select(post) {
      console.log(post.get('title'));
    }
  }
});
