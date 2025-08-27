export const slugify = (text) => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')      // space ko "-"
    .replace(/[^\w\-]+/g, '')  // extra chars remove
    .replace(/\-\-+/g, '-');   // multiple "-" ko single
};
