import {
    component_styles_default
  } from "@shoelace-style/shoelace/dist/chunks/chunk.TUVJKY7S.js";
  
  // src/components/copy-button/copy-button.styles.ts
  import { css } from "lit";
  var copy_button_styles_default = css`
    ${component_styles_default}
  
    :host {
      --error-color: var(--sl-color-danger-600);
      --success-color: var(--sl-color-success-600);
  
      display: inline-block;
    }

    .copy-button__button {
      flex: 0 0 auto;
      display: flex;
      align-items: center;
      background: none;
      border: none;
      border-radius: var(--sl-border-radius-medium);
      font-size: inherit;
      color: inherit;
      padding: var(--sl-spacing-x-small);
      cursor: pointer;
      transition: var(--sl-transition-x-fast) color;
    }



    .copy-button:hover:not(.copy-button--disabled),
    .copy-button:focus-visible:not(.copy-button--disabled) {
      color: var(--sl-color-primary-600);
    }
  
    .copy-button:active:not(.icon-button--disabled) {
      color: var(--sl-color-primary-700);
    }
  
    .copy-button:focus {
      outline: none;
    }
  
    .copy-button--disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  
    .copy-button:focus-visible {
      outline: var(--sl-focus-ring);
      outline-offset: var(--sl-focus-ring-offset);
    }
  


    .copy-button--success {
      color: var(--success-color);
    }
  
    .copy-button--error {
      color: var(--error-color);
    }
  
    .copy-button__button:focus-visible {
      outline: var(--sl-focus-ring);
      outline-offset: var(--sl-focus-ring-offset);
    }
  
    .copy-button__button[disabled] {
      opacity: 0.5;
      cursor: not-allowed !important;
    }
  
    slot {
      display: inline-flex;
    }
  `;
  
  export {
    copy_button_styles_default
  };
  