;(function setHtmlSize () {
  const htmlNode = document.getElementsByTagName('html')
  const screenWidth = window.screen.width
  let htmlSize
  try {
    const root = document.createElement('div')
    root.style = 'font-size:16px;'
    document.body.appendChild(root)
    const scaledFontSize = document.documentElement.currentStyle
      ? document.documentElement.currentStyle['fontSize']
      : parseFloat(
        window.getComputedStyle(root, null).getPropertyValue('font-size')
      )
    document.body.removeChild(root)
    const scaleFactor = 16 / scaledFontSize
    htmlSize = (scaleFactor * screenWidth) / 10
  } catch (e) {
    htmlSize = screenWidth / 10
  }
  htmlNode[0].style.fontSize = '' + htmlSize + 'px'
})()
