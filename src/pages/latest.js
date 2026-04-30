import React, {useEffect} from 'react';
import {useHistory} from '@docusaurus/router';
import blogPosts from '@generated/docusaurus-plugin-content-blog/default/blog-post-list-prop-default.json';

export default function Latest() {
  const history = useHistory();

  useEffect(() => {
    if (!blogPosts || blogPosts.length === 0) return;
    history.replace(blogPosts.items[0].permalink);
  }, [history]);

  return null;
}
