// https://rice.place/other/discord.html

let api = "https://api.lanyard.rest/v1/users/969086944992710658";

const statusColors = {
  online: "#5dff8a",
  idle: "#cb9654",
  dnd: "#d83a43",
  offline: "#ebdbb2",
};

async function discordChecker() {
  try {
    const response = await fetch(api);
    const _data = await response.json();
    const data = _data.data;

    const url =
      "url('https://cdn.discordapp.com/avatars/969086944992710658/" +
      data.discord_user.avatar +
      ".webp?size=4096')";

    const dstatus = data.discord_status;

    const avatar = document.getElementById("avatar");
    const status = document.getElementById("status");
    avatar.style.backgroundImage = url;
    avatar.style.cssText += "--glow-color: " + statusColors[dstatus];
    status.style.cssText += "color: " + statusColors[dstatus];
    status.innerHTML = dstatus;

    console.info("avatar: " + url);
  } catch (error) {
    console.error("failed to fetch!!", error);
  }
}

discordChecker();
setInterval(discordChecker, 5 * 1000);
