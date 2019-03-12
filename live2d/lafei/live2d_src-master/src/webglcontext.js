<link rel="stylesheet" class="aplayer-secondary-style-marker" href="\assets\css\APlayer.min.css"><script src="\assets\js\APlayer.min.js" class="aplayer-secondary-script-marker"></script>
var context = undefined;

export function setContext(webglContext) {
  context = webglContext;
}

export function getContext() {
  return context;
}