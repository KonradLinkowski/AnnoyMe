const { app, BrowserWindow } = require('electron')
app.allowRendererProcessReuse = true
function createWindow () {
  const mainWindow = new BrowserWindow({
    alwaysOnTop: true,
    darkTheme: true,
    kiosk: true,
    frame: false,
  })

  mainWindow.on('close', e => {
    e.preventDefault()
  })
  mainWindow.loadFile('index.html')
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})
