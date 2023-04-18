import chalk from "chalk";
import dayjs from "dayjs";
import { five } from "./test";

console.log(chalk.magenta(`===== ${dayjs().format("HH:mm:ss")} =====`));

console.log(five);
