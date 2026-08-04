import { initImmersiveMode } from "./modules/immersive-mode.js";

const EXT_ID = 'ImmersiveLayout';
const extensionFolderPath = `scripts/extensions/third-party/${EXT_ID}`;

jQuery(async () => {
    const settingsHtml = await $.get(`${extensionFolderPath}/settings.html`);
    $('#extensions_settings').append(settingsHtml);

    initImmersiveMode();
});
