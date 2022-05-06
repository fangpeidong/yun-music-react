export function handleSongsCategory(data) {
  const category = data.categories;
  const categoryData = Object.entries(category).map(([key, value]) => {
    return {
      name: value,
      subs: [],
    };
  });
  for (let item of data.sub) {
    categoryData[item.category].subs.push(item);
  }

  return categoryData;
}

export function generateSingerAlpha() {
  let alphabets = ['-1'];
  let start = 'A'.charCodeAt(0);
  let last = 'Z'.charCodeAt(0);
  for (let i = start; i <= last; ++i) {
    alphabets.push(String.fromCharCode(i));
  }
  alphabets.push('0');
  return alphabets;
}

export const singerAlphas = generateSingerAlpha();
