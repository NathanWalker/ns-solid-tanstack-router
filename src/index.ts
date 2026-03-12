import { render } from "@nativescript-community/solid-js";
import { Application } from "@nativescript/core";
import { document, registerElement } from "dominative";
import { ImageCacheIt } from "@triniwiz/nativescript-image-cache-it";
import { App } from "./app";

registerElement("imagecacheit", ImageCacheIt);

Application.run({
  create: () => {
    render(App, document.body);
    return document;
  },
});