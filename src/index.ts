import { render } from "@nativescript-community/solid-js";
import { Application } from "@nativescript/core";
import { startSolidApp } from "@nativescript/vite/solid-bootstrap";
import { document, registerElement } from "dominative";
import { ImageCacheIt } from "@triniwiz/nativescript-image-cache-it";
import { App } from "./app";

registerElement("imagecacheit", ImageCacheIt);

startSolidApp({
  Application,
  render,
  document,
  root: App,
  rootModule: "/src/app",
});
