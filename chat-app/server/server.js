const express = require("express");
const app = express();
const server = app.listen(5002);
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
}); //port 5002

io.on("connection", (socket) => {
  const id = socket.handshake.query.id; // this is a way to make a static id that stays the same even when the page is refreshed;
  socket.join(id);

  socket.on("send-message", ({ recipients, text }) => {
    recipients.forEach((recipient) => {
      const newRecipients = recipients.filter((r) => r !== recipient);
      newRecipients.push(id);
      socket.broadcast.to(recipient).emit("receive-message", {
        recipients: newRecipients,
        sender: id,
        text,
      })
    });
  })
});