import { readFile } from 'node:fs/promises';

const pages = [
  ['dist/index.html', 'Find the misunderstanding'],
  ['dist/dashboard/index.html', 'Questionnaires'],
  ['dist/new/index.html', 'What should your client understand?'],
  ['dist/questionnaire/index.html', 'Answer review'],
  ['dist/check/demo/index.html', 'Let’s check that the important points are clear.'],
];

for (const [path, marker] of pages) {
  const html = await readFile(path, 'utf8');
  if (!html.includes(marker)) throw new Error(`${path} is missing marker: ${marker}`);
  if (html.includes('theoneistari.github.io/samepage') && html.includes('/samepagenew/')) {
    throw new Error(`${path} contains a GitHub Pages base-path regression`);
  }
}

const home = await readFile('dist/index.html', 'utf8');
for (const href of ['/samepage/new/', '/samepage/dashboard/', '/samepage/check/demo/']) {
  if (!home.includes(`href="${href}"`)) throw new Error(`Homepage is missing ${href}`);
}

console.log('Verified 5 static routes and GitHub Pages base paths.');
