import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

interface SidebarItem {
  text: string
  link: string
}

interface SidebarGroup {
  text: string
  collapsed: boolean
  items: SidebarItem[]
}

function generateSidebar() {
  const notesPath = path.resolve(__dirname, '../../../notes')
  const outputPath = path.resolve(__dirname, '../theme/utils/createSideBar.ts')

  // 获取所有目录
  const directories = fs.readdirSync(notesPath)
    .filter(file => fs.statSync(path.join(notesPath, file)).isDirectory())

  // 生成侧边栏配置
  const sidebarGroups = directories.map((dirName, index) => {
    const dirPath = path.join(notesPath, dirName)
    const files = fs.readdirSync(dirPath)
      .filter(file => file.endsWith('.md'))
      .sort((a, b) => {
        const numA = parseInt(a.match(/^(\d+)/)?.[0] || '0')
        const numB = parseInt(b.match(/^(\d+)/)?.[0] || '0')
        return numA - numB
      })

    const items = files.map(file => {
      const filePath = path.join(dirPath, file)
      const content = fs.readFileSync(filePath, 'utf-8')
      const { data: frontmatter } = matter(content)
      const fileName = file.replace('.md', '')

      return `          { text: '${frontmatter.title || fileName}', link: '/notes/${dirName}/${fileName}' }`
    }).join(',\n')

    return `      {
        text: '${dirName}',
        collapsed: ${index !== 0},
        items: [
${items}
        ]
      }`
  }).join(',\n')

  // 生成配置文件内容
  const fileContent = `import { type DefaultTheme } from 'vitepress'

interface SidebarItem {
  text: string
  link: string
}

interface SidebarGroup {
  text: string
  collapsed: boolean
  items: SidebarItem[]
}

// 此文件由脚本自动生成，请勿手动修改
export function createSideBarZH(): DefaultTheme.Sidebar {
  return {
    '/notes/': [
${sidebarGroups}
    ]
  }
}
`

  // 写入文件
  fs.writeFileSync(outputPath, fileContent, 'utf-8')
  console.log('Sidebar configuration generated successfully!')
}

// 执行生成
generateSidebar() 