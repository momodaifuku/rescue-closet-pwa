import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(<App />)

// スマホ/PCの画面サイズに合わせてアプリ(390x820想定)をフィット表示
function scaleApp() {
  const r = document.getElementById('root')
  if (!r || !r.firstElementChild) return
  const w = 390, h = 820
  const s = Math.min(window.innerWidth / w, window.innerHeight / h, 1.4)
  r.style.transform = 'scale(' + s + ')'
}
window.addEventListener('resize', scaleApp)
const iv = setInterval(scaleApp, 300)
setTimeout(() => { clearInterval(iv); setInterval(scaleApp, 1500) }, 6000)
