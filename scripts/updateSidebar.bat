@echo off
echo Updating sidebar configuration...
pnpm exec ts-node --project ts-node-config.json --transpile-only docs/.vitepress/theme/utils/updateSidebar.ts
echo Done! 