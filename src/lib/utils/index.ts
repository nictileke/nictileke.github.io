export const fetchMarkdownPosts = async () => {
  const allPostFiles = import.meta.glob("../posts/*.svx");
  const iterablePostFiles = Object.entries(allPostFiles);

  const allPosts = await Promise.all(
    iterablePostFiles.map(async ([path, resolver]) => {
      const { metadata } = (await resolver()) as any;
      /* remove the path part and the end part */
      const id = path.slice("../posts/".length, ".svx".length * -1);
      const postPath = `${id}`;
      return {
        meta: metadata,
        path: postPath,
      };
    })
  );

  return allPosts;
};
