# The smallest Node.js website you can easily run on your local computer

(Accompanies associated blog post on Katie Kodes "[Source code that builds locally into a Node.js Hello World webapp](https://katiekodes.com/node-hello-world/)".)

---

## Prerequisites

1. You must have Node.js installed onto your local computer.
    * If you do not have Node.js version #18 installed onto your local computer:
        * The most reliable way to ensure you can run this codebase is to install version #18 onto your computer.
        * However, you can probably also get away with simply changing the version number found in the `/.nvmrc` file of this codebase once you've downloaded a copy of it to your local computer.
2. You must have Node Package Manager _("NPM")_ installed onto your local computer.
3. You must download a copy of this codebase onto your local computer.
4. Using a command line interface -- ensuring first that its prompt indicates that your commands will be running within the context of the folder into which you downloaded a copy of this codebase -- you must run the following command:
    ```sh
    npm install
    ```

The `npm install` command will take about a minute to execute.

It will add a new subfolder and a new file to the folder on your computer containing a copy of this codebase:

1. A `/node_modules/` folder _(important)_
2. A `/package-lock.json` file _(unnecessary for this exercise but not hurting anything)_.

---

## Building source code into a runtime

Open up a command line interface.

Ensure that its prompt indicates that your commands will be running within the context of the folder into which you downloaded a copy of this codebase.

Run the following command:

```sh
npm run build
```

The `npm run build` command will take about a minute or two to execute.

It will add a new subfolder called `/dist/` into the folder on your computer containing a copy of this codebase.

If you open up the new `/dist/` folder, you'll see that its file structure looks like this:

```
dist/
├─ node_modules/
│  ├─ ...a lot of folders...
│  ├─ ...but not as many as in the other node_modules folder...
│  ├─ ...for example, none called `/dist/node_modules/shx/`...
│  ├─ ...even though there is a `/node_modules/shx` in the other /node_modules/ folder...
│  ├─ ...don't worry, this is on purpose...
│  └─ .package-lock.json
└─ server.js
```

Yes, in addition to containing a copy of `server.js`, `/dist/` also contains yet another `/node_modules/` folder.  Interestingly, it is _not_ just a copy of the other `/node_modules/` folder you made earlier.

The `/node_modules/` folder up in the "root" of the folder on your computer containing a copy of this codebase lets _you_, the human, successfully run commands like `npm run build`.

The one inside of `/dist/` is more stripped-down and contains only what a _server_ would need to actually _run_ your Hello World webapp that you just built.

Congratulations -- you have now built an executable "runtime" for Node.js that, when executed, will behave as a web server.

The entirety of your "runtime" that you just built lives in the `/dist/` folder.

Anything above the `/dist/` folder has _**nothing**_ to do with making your actual webserver run.  It's all there for your convenience as a human.

---

## Running your web server

Open up a command line interface.

Ensure that its prompt indicates that your commands will be running within the context of the folder into which you downloaded a copy of this codebase.

Run the following command:

```sh
node ./dist/server.js
```

* **WARNING**:  Do _not_ close the command line just yet or it will be difficult to stop your web server later in this exercise.

Unless you happen to have already manually set an environment variable named "`PORT`" on your local computer to some number, the output you will see will say:

```
Example app listening on port 3000
```

If `PORT` is an environment variable with a value on your local computer, you'll see that number instead of "`3000`."

---

## Visiting your website

Open a web browser and navigate to [http://localhost:3000](http://localhost:3000).

* _Note:  If your startup gave you another number besides `3000`, replace the `3000` in my URL with your number instead when visiting a URL in your browser._

Take a look in the upper-left corner of the webpage you just visited:  it should say "**Hello World!**"

---

## Stopping your web server

Go back to the command line interface from which you ran `node ./dist/server.js`.

Hold <kbd>Ctrl</kbd> and hit <kbd>c</kbd>, then release them both.

Your command line interface should return to a standard prompt indicating that your next command will be running within the context of the folder into which you downloaded a copy of this codebase.