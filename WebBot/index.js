const TelegramBot = require(`node-telegram-bot-api`);

const TOKEN = `1157477465:AAFrHNckDe97l7NhGGV-1insFzf_h8rJyPs`;

const bot = new TelegramBot(TOKEN, { polling: true });

bot.on("message", (msg) => {
  bot.sendMessage(
    msg.chat.id,
    `Salve salve ${msg.from.first_name}!"${msg.text}"`
  );
});
