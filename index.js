const { name, phone, add } = require("./module1");

const os = require("os");
const path = require("path");
// const fs = require("fs");
const fsPromise = require("fs").promises;

const http = require("http");

const PORT = 5500;

const server = http.createServer(async (req, res) => {
  console.log(req.url, req.method);
  // const readData = await fsPromise.readFile(
  //   path.join(__dirname, "files", "test.txt"),
  //   "utf8"
  // );

  // res.writeHead(200, { "Content-Type": "text/html" });
  // res.write(readData);
  // res.end();

  if (req.url == "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<html><body><p>This is home page!</p></html>");
    res.end();
  }

  if (req.url == "/employee") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<html><body><p>This is employee page!</p></html>");
    res.end();
  }

  if (req.url == "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<html><body><p>This is home page!</p></html>");
    res.end();
  }

  if (req.url == "/admin") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<html><body><p>This is admin page!</p></html>");
    res.end();
  }

  if (req.url == "/data") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify({ name: "Ganesh", age: 24 }));
    res.end();
  }

  res.writeHead(400, { "Content-Type": "text/html" });
  res.write("<html><body><p>Invalid routes</p></html>");

  res.end();
});

server.listen(PORT, () => console.log("server started on 5500"));
// console.log("Hello");
// console.log(os);

const currentOs = {
  osName: os.type(),
  version: os.version(),
  machine: os.machine(),
  tatalMem: os.totalmem(),
};

const fileOperation = async () => {
  try {
    // const writeData = await fsPromise.writeFile(path.join(__dirname, "files", "test.txt"),"Learning node JS")
    const appendData = await fsPromise.appendFile(
      path.join(__dirname, "files", "test.txt"),
      "\nAm being appened after the new content"
    );
    const readData = await fsPromise.readFile(
      path.join(__dirname, "files", "tet.txt"),
      "utf8"
    );
    // console.log(readData)
  } catch (err) {
    // console.log(err);
    const appendData = await fsPromise.appendFile(
      path.join(__dirname, "files", "test.txt"),
      `\ngot error - ${err}`
    );
  }
};
// fileOperation();
// fs.readFile(path.join(__dirname, "files", "test.txt"), "utf8", (err, data) => {
//   if (err) throw err;
//   // console.log(data.toString());
//   console.log(data);
// });

// fs.writeFile(
//   path.join(__dirname, "files", "test.txt"),
//   "Learning node JS",
//   (err) => {
//     if (err) throw err;
//     console.log("Write completed");
//   }
// );

// fs.appendFile(
//     path.join(__dirname, "files", "test.txt"),
//     "\nAm being appened after the existing content",
//     (err) => {
//       if (err) throw err;
//       console.log("Append completed");
//     }
//   );

// console.log("Hey am on last line");

process.on("uncaughtException", (err, orgi) => {
  console.log(err, orgi);
});

// const joinPath = path.join('/abc/','foldername','file.txt')
// const basePath = path.basename(joinPath)

// const joinPath = path.join(__dirname,__filename)
// console.log(joinPath)
// console.log(currentOs)
// let out = add(1,2);
// console.log('out',out)
// console.log('hello - ', name,phone,add(1,2));
