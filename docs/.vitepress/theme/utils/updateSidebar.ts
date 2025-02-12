const fs = require('fs');
const path = require('path');

interface SidebarItem {
  text: string;
  link: string;
}

interface SidebarGroup {
  text: string; 
  collapsed: boolean;
  items: SidebarItem[];
}

function scanDirectory(dir: string): SidebarGroup[] {
  const groups: SidebarGroup[] = [];
  
  // 读取 notes 目录下的所有文件夹
  const folders = fs.readdirSync(dir)
    .filter((f: string) => fs.statSync(path.join(dir, f)).isDirectory())
    .filter((f: string) => !f.startsWith('.'));

  // 处理每个文件夹
  for (const folder of folders) {
    const items: SidebarItem[] = [];
    const folderPath = path.join(dir, folder);

    // 读取文件夹下的所有 md 文件
    const files = fs.readdirSync(folderPath)
      .filter((f: string) => f.endsWith('.md'))
      .filter((f: string) => f !== 'index.md');

    // 将每个文件转换为 sidebar item
    for (const file of files) {
      items.push({
        text: file.replace('.md', ''),
        link: `/notes/${folder}/${file.replace('.md', '')}`
      });
    }

    if (items.length > 0) {
      groups.push({
        text: folder,
        collapsed: false,
        items
      });
    }
  }

  return groups;
}

function generateSidebarCode(groups: SidebarGroup[]): string {
  const sidebarCode = `
export function createSideBarZH() {
  return {
    "/notes/": [
      ${groups.map(group => `{
        text: "${group.text}",
        collapsed: false,
        items: [
          ${group.items.map(item => `{ text: "${item.text}", link: "${item.link}" }`).join(',\n          ')}
        ]
      }`).join(',\n      ')}
    ].map((item, i) => (!i ? item : { ...item, collapsed: true })),
  }
}
`;

  return sidebarCode;
}

// 主函数
function updateSidebar() {
  const notesDir = path.resolve(__dirname, '../../../notes');
  const sidebarFile = path.resolve(__dirname, './createSideBar.ts');

  const groups = scanDirectory(notesDir);
  const code = generateSidebarCode(groups);

  fs.writeFileSync(sidebarFile, code);
  console.log('Sidebar configuration has been updated!');
}

updateSidebar(); 