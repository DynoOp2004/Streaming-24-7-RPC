const Discord = require("discord.js-selfbot-v13");
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false,
});

const keepAlive = require("./server.js");
keepAlive();

function formatTime() {
  //Credits to himika#0001 and never#0001
  const date = new Date();
  const options = {
    timeZone: "Asia/Kolkata", //https://www.zeitverschiebung.net/en/ and find your city and enter here
    hour12: true,
    hour: "numeric",
    minute: "numeric",
  };
  return new Intl.DateTimeFormat("en-US", options).format(date);
}

client.on("ready", async () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`);

  const r = new Discord.RichPresence(client)
    .setApplicationId("1461936040863338678")
    .setType("STREAMING")
    .setURL("https://www.youtube.com/watch?v=M8vDwlHigJA") //Must be a youtube video link
    .setState("Don't Underestimate us !!")
    .setName("Is this really love?")
    .setDetails(`We are the secrets!?`)
    .setStartTimestamp(Date.now())
    .setAssetsLargeImage(
      "https://media.discordapp.net/attachments/1437376805353947139/1461941693594079404/monokuma-discord-logo-512x512.png?ex=696c62cd&is=696b114d&hm=67bdcee5d4129abf62158600ecc8e000d967b4b69c786b909c3ba45eae3544e6&=&format=webp&quality=lossless&width=768&height=768",
    ) //You can put links in tenor or discord and etc.
    .setAssetsLargeText("We are the secrets.") //Text when you hover the Large image
    .setAssetsSmallImage(
      "https://cdn.discordapp.com/attachments/1437376805353947139/1460775258213847155/1219350987249025045.gif?ex=696c18f9&is=696ac779&hm=0d16a0d4b45a2471f704f86d2224c632811083425f0aed5df0b5c95852417231&",
    ) //You can put links in tenor or discord and etc.
    .setAssetsSmallText("Verified") //Text when you hover the Small image
    .addButton("Portfolio", "https://e-z.bio/developer")
    .addButton(
      "Subscribe",
      "https://www.youtube.com/@Jenna_YTthegoat",
    );

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = `discord.gg/`;
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});

const mySecret = process.env["TOKEN"];
client.login(mySecret);
