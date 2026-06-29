async function customFetch(url) {
  const response = await fetch(url);
  return await response.text();
}

function parseHrefs(content) {
  return [...content.matchAll(/href="([^"]+)"/g)].map((match) => match[1]);
}

async function recursive(url) {
  const content = await customFetch(url);
  const hrefs = parseHrefs(content).filter((href) => href !== "../");

  if (hrefs.length === 0) console.log(content);
  if (content.includes("flag")) process.exit(0);

  for (const href of hrefs) {
    await recursive(url + href);
  }
}

async function main() {
  await recursive("http://VM_IP/.hidden/");
}

main();
