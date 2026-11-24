import { render } from "@nativescript-community/solid-js";
import { Application, Page } from "@nativescript/core";
import { startSolidApp } from "@nativescript/vite/solid-bootstrap";
import { document, registerElement } from "dominative";
import { ImageCacheIt } from "@triniwiz/nativescript-image-cache-it";
import { App } from "./app";

registerElement("imagecacheit", ImageCacheIt);

if (__ANDROID__) {
  // Edge-to-edge: pages keep the status-bar inset but let content scroll under
  // the gesture bar; page content carries its own bottom padding.
  Page.on(Page.navigatingToEvent, (args) => {
    (args.object as Page).androidOverflowEdge = "bottom";
  });
}

startSolidApp({
  Application,
  render,
  document,
  root: App,
  rootModule: "/src/app",
});
