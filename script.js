function sendMessage() {
  const message = document.querySelector("input[name='message']").value;
  const username = document.querySelector("input[name='username']").value;
  const avatar_url = document.querySelector("input[name='avatar_url']").value;

  const webhookUrl = ${process.env.webhook};

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
