import { ShoelaceElement } from "@shoelace-style/shoelace/dist/chunks/chunk.Z7XDKKOD";
import { copy_button_styles_default } from './CopyButton_default_style.js'
import { __decorateClass } from "@shoelace-style/shoelace/dist/chunks/chunk.6M63UXML";
import { getAnimation, setDefaultAnimation } from '@shoelace-style/shoelace/dist/utilities/animation-registry.js';
import { LocalizeController } from '@shoelace-style/shoelace/dist/chunks/chunk.2A3352EO'

import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path';
setBasePath('https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.14.0/cdn/')
import SlIcon from '@shoelace-style/shoelace/dist/react/icon';

import { classMap } from "lit/directives/class-map.js";
import { html } from "lit";
import { property, query, state } from "lit/decorators.js";

import * as React from "react";
import { createComponent } from "@lit-labs/react";
import "@lit-labs/react";

var SlCopyButtonAdjust = class extends ShoelaceElement {
    constructor() {
        super(...arguments);
        this.localize = new LocalizeController(this);
        this.isCopying = false;
        this.status = "rest";
        this.value = "";
        this.from = "";
        this.disabled = false;
        this.copyLabel = "";
        this.successLabel = "";
        this.errorLabel = "";
        this.feedbackDuration = 1e3;
        this.hoist = false;
        this.hasFocus = false;
    }
    handleBlur() {
      this.hasFocus = false;
      this.emit("sl-blur");
    }
    handleFocus() {
      this.hasFocus = true;
      this.emit("sl-focus");
    }
    /** Simulates a click on the icon button. */
    click() {
      this.button.click();
    }
    /** Sets focus on the icon button. */
    focus(options) {
      this.button.focus(options);
    }
    /** Removes focus from the icon button. */
    blur() {
      this.button.blur();
    }
    async handleCopy() {
      if (this.disabled || this.isCopying) {
        return;
      }
      this.isCopying = true;
      let valueToCopy = this.value;
      if (this.from) {
        const root = this.getRootNode();
        const isProperty = this.from.includes(".");
        const isAttribute = this.from.includes("[") && this.from.includes("]");
        let id = this.from;
        let field = "";
        if (isProperty) {
          [id, field] = this.from.trim().split(".");
        } else if (isAttribute) {
          [id, field] = this.from.trim().replace(/\]$/, "").split("[");
        }
        const target = "getElementById" in root ? root.getElementById(id) : null;
        if (target) {
          if (isAttribute) {
            valueToCopy = target.getAttribute(field) || "";
          } else if (isProperty) {
            valueToCopy = target[field] || "";
          } else {
            valueToCopy = target.textContent || "";
          }
        } else {
          this.showStatus("error");
          this.emit("sl-error");
        }
      }
      if (!valueToCopy) {
        this.showStatus("error");
        this.emit("sl-error");
      } else {
        try {
          await navigator.clipboard.writeText(valueToCopy);
          this.showStatus("success");
          this.emit("sl-copy", {
            detail: {
              value: valueToCopy
            }
          });
        } catch (error) {
          this.showStatus("error");
          this.emit("sl-error");
        }
      }
    }
    async showStatus(status) {
      const iconToShow = status === "success" ? this.successIcon : this.errorIcon;
      const showAnimation = getAnimation(this, "copy.in", { dir: "ltr" });
      const hideAnimation = getAnimation(this, "copy.out", { dir: "ltr" });
      await this.copyIcon.animate(hideAnimation.keyframes, hideAnimation.options).finished;
      this.copyIcon.hidden = true;
      this.status = status;
      iconToShow.hidden = false;
      await iconToShow.animate(showAnimation.keyframes, showAnimation.options).finished;
      setTimeout(async () => {
        await iconToShow.animate(hideAnimation.keyframes, hideAnimation.options).finished;
        iconToShow.hidden = true;
        this.status = "rest";
        this.copyIcon.hidden = false;
        await this.copyIcon.animate(showAnimation.keyframes, showAnimation.options).finished;
        this.isCopying = false;
      }, this.feedbackDuration);
    }
    render() {
        return html`
        <button
        class=${classMap({
      "copy-button": true,
      "copy-button--success": this.status === "success",
      "copy-button--error": this.status === "error",
      "copy-button__button": true,
      "icon-button--focused": this.hasFocus
    })}
          part="base"
          type="button"
          title="Copy"
          ?disabled=${this.disabled}
          @click=${this.handleCopy}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
        >
            <slot part="copy-icon" name="copy-icon">
              <sl-icon name="copy"></sl-icon>
            </slot>
            <slot part="success-icon" name="success-icon" hidden>
              <sl-icon library="system" name="check"></sl-icon>
            </slot>
            <slot part="error-icon" name="error-icon" hidden>
              <sl-icon library="system" name="x-lg"></sl-icon>
            </slot>
          </button>
      `;
    }
};
SlCopyButtonAdjust.styles = copy_button_styles_default;
SlCopyButtonAdjust.dependencies = {
  "sl-icon": SlIcon,
};
__decorateClass([
  query(".copy-button")
], SlCopyButtonAdjust.prototype, "button", 2);
__decorateClass([
  state()
], SlCopyButtonAdjust.prototype, "hasFocus", 2);
__decorateClass([
  query('slot[name="copy-icon"]')
], SlCopyButtonAdjust.prototype, "copyIcon", 2);
__decorateClass([
  query('slot[name="success-icon"]')
], SlCopyButtonAdjust.prototype, "successIcon", 2);
__decorateClass([
  query('slot[name="error-icon"]')
], SlCopyButtonAdjust.prototype, "errorIcon", 2);
__decorateClass([
  state()
], SlCopyButtonAdjust.prototype, "isCopying", 2);
__decorateClass([
  state()
], SlCopyButtonAdjust.prototype, "status", 2);
__decorateClass([
  property()
], SlCopyButtonAdjust.prototype, "value", 2);
__decorateClass([
  property()
], SlCopyButtonAdjust.prototype, "from", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], SlCopyButtonAdjust.prototype, "disabled", 2);
__decorateClass([
  property({ attribute: "feedback-duration", type: Number })
], SlCopyButtonAdjust.prototype, "feedbackDuration", 2);
__decorateClass([
  property({ type: Boolean })
], SlCopyButtonAdjust.prototype, "hoist", 2);
setDefaultAnimation('copy.in', {
    keyframes: [
      { scale: '.25', opacity: '.25' },
      { scale: '1', opacity: '1' }
    ],
    options: { duration: 100 }
  });

setDefaultAnimation("copy.out", {
    keyframes: [
      { scale: "1", opacity: "1" },
      { scale: ".25", opacity: "0" }
    ],
    options: { duration: 100 }
});

// export {
//     SlCopyButtonAdjust
// };


var tagName = "sl-copy-button-adjust";
SlCopyButtonAdjust.define("sl-copy-button-adjust");
var reactWrapper = createComponent({
  tagName,
  elementClass: SlCopyButtonAdjust,
  react: React,
  events: {
    onSlBlur: "sl-blur",
    onSlFocus: "sl-focus",
    onSlCopy: "sl-copy",
    onSlError: "sl-error"
  },
  displayName: "SlCopyButtonAdjust"
});
var copy_button_default = reactWrapper;

export {
  copy_button_default as default
};