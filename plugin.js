const fs = require("fs");
const path = require("path");
const glob = require("glob");
const cp = require("child_process");

module.exports = {
  name: "studio",
  description: "Open Android Studio",
  func: (arg, args, options) => {
    const cwd = process.cwd();
    const iosdir = path.join(cwd, "android");
    if (!fs.existsSync(iosdir)) {
      console.log("Did not find the iOS code in the expected location", iosdir);
      return;
    }
    var clargs = [];
    clargs.push("-a");
    clargs.push("/Applications/Android Studio.app");
    clargs.push(iosdir);
    cp.spawn("open", clargs, { stdio: "inherit" });
    return;
  }
};
