addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const ua = request.headers.get('User-Agent') || '';
  if (ua.match(/(iphone|ipod|ipad)/i) ) {
    return Response.redirect("https://itunes.apple.com/us/app/id1488601840", 301);
  }
  return Response.redirect("https://play.google.com/store/apps/details?id=com.dol_sensors.smartadjust", 301);
}
