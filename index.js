import { initImmersiveMode } from "./modules/immersive-mode.js";

const EXT_ID = 'ImmersiveLayout';

const EXT_FOLDER_ID = (() => {
    try {
        const url = new URL(import.meta.url);
        const match = url.pathname.match(/\/scripts\/extensions\/third-party\/([^/]+)\//);
        return match?.[1] ? decodeURIComponent(match[1]) : EXT_ID;
    } catch {
        return EXT_ID;
    }
})();

const extensionFolderPath = `scripts/extensions/third-party/${EXT_FOLDER_ID}`;

jQuery(async () => {
    try {
        const settingsHtml = await $.get(`${extensionFolderPath}/settings.html`);
        $('#extensions_settings').append(settingsHtml);
    } catch (error) {
        console.warn(`[ImmersiveLayout] 无法加载设置面板 ${extensionFolderPath}/settings.html:`, error);
    }

    initImmersiveMode();
});
