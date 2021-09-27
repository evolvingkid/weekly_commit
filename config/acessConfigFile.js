import path from "node:path";
import { findUp, pathExists } from "find-up";
import fs from "fs";

const acessConfigFile = async () => {
  try {
    const filedir = await findUp("weeklycommit.config.json");

    if (!filedir) {
      
      return;
    }

    const data = JSON.parse(fs.readFileSync(filedir, "utf8"));

    return data;

  } catch (error) {
    throw error;
  }
};

export default acessConfigFile;
