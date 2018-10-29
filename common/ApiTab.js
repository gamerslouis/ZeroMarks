export function makeTabFromApiTab(apiTab, args = {}) {
    apiTab.managerSelect = args.managerSelect || false;
    apiTab.matchSearch = args.matchSearch || true;
    apiTab.labelColor = args.labelColor || 'rgb(249, 255, 254)';
    apiTab.StaticTitle = args.StaticTitle || null;
    apiTab.tagName = args.tagName || 'tes';
    apiTab.taged = args.taged || false;

    return apiTab;
}