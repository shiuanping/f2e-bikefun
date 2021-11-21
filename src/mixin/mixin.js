import jsSHA from "jssha"
export const GetAuthorizationHeader = () => {
    const AppID = '0b6ea8bd5f33451783f7bc0450839ce1'
    const AppKey = 'xonE55F8FKe6uhi060kOw9O4KVc'
    const GMTString = new Date().toGMTString()
    const ShaObj = new jsSHA('SHA-1', 'TEXT', { encoding: 'UTF8' })
    ShaObj.setHMACKey(AppKey, 'TEXT')
    ShaObj.update('x-date: ' + GMTString)
    const HMAC = ShaObj.getHMAC('B64')
    const Authorization = 'hmac username="' + AppID + '", algorithm="hmac-sha1", headers="x-date", signature="' + HMAC + '"'
    return { Authorization: Authorization, 'X-Date': GMTString }
  }