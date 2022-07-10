#!/usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";
import figlet from "figlet";
import { createSpinner } from "nanospinner";
import SendNotication from "./services";
import { getTokens, db } from "./db";

var notification = {};
let segment = "ALL";
let uid = "";

function Title() {
  console.clear();
  figlet("SYP Notifications", (err, data) => {
    console.log(chalk.blueBright(data));
  });
}

async function getTitle() {
  console.clear();
  const answers = await inquirer.prompt({
    name: "title",
    type: "input",
    message: "Enter the Notification Title",
  });

  notification.title = answers.title;
}

async function getSegment() {
  console.clear();
  const answers = await inquirer.prompt({
    name: "segment",
    type: "list",
    message: "Enter the Notification Segment",
    default: "ALL",
    choices: ["ALL", "STAFF", "UID"],
  });

  segment = answers.segment;
}

async function getUid() {
  console.clear();
  const answers = await inquirer.prompt({
    name: "uid",
    type: "input",
    message: "Enter the Participant UID",
  });

  uid = answers.uid;
}

async function getMessage() {
  console.clear();
  const answers = await inquirer.prompt({
    name: "body",
    type: "input",
    message: "Enter the Notification content",
  });

  notification.body = answers.body;
}

async function handleAnswer(notification) {
  if (segment === "UID") {
    getUid().then(() => {
      db.collection("users")
        .doc(uid)
        .get()
        .then((v) => {
          const spinner = createSpinner(
            `Sending Notification to ${v.data().NotificationToken} ...`
          ).start();
          SendNotication(notification, [v.data().NotificationToken])
            .then(() => spinner.success())
            .catch(() => spinner.error());
        });
    });
  } else {
    const spinner = createSpinner("Sending Notification...").start();
    SendNotication(notification, await getTokens(segment, notification))
      .then(() => spinner.success())
      .catch(() => spinner.error());
  }
}

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

Title();
await sleep(1000);
await getTitle();
await getSegment();
await getMessage().then(() => handleAnswer(notification));
