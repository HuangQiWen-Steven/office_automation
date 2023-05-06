// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const { app, BrowserWindow } = require('electron')
// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const WinState = require('electron-win-state').default
// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const path = require('path')

const createWindow = () => {
  const winState = new WinState({
    defaultWidth: 1000,
    defaultHeight: 800
  })
  const win = new BrowserWindow(
    {
      // 自定义窗口状态
      ...winState.winOptions,
      webPreferences:{
        // 预加载
        // eslint-disable-next-line no-undef
        preload : path.resolve(__dirname,'./preload/index.ts')
      }
    }
  )

  win.loadURL('http://localhost:5173')

  win.webContents.openDevTools()

  winState.manage(win)
}

app.whenReady().then(() => {
  createWindow()
  app.on('activate', () => {
    // 在 macOS 系统内, 如果没有已开启的应用窗口
    // 点击托盘图标时通常会重新创建一个新窗口
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  // eslint-disable-next-line no-undef
  if (process.platform !== 'darwin') app.quit()
})
