function sendMessage() {
  const message = document.querySelector("input[name='message']").value;
  const username = document.querySelector("input[name='username']").value;
  const avatar_url = document.querySelector("input[name='avatar_url']").value;

  const webhookUrl = "https://discord.com/api/webhooks/1134870445120823428/g9Fral2zdLHa617ey10luo3bXLPJUp97jGfYpyHQNrafNiqGmmT5wc70HZqkN27XNmyc";

  const params = {
    username,
    avatar_url,
    content: message,
  };

  const request = new XMLHttpRequest();
  request.open("POST", webhookUrl);
  request.setRequestHeader("Content-Type", "application/json");
  request.send(JSON.stringify(params));
}
