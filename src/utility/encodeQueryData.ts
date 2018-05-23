/**
 * encodeQueryData
 * Usage: encodeQueryData({id: 1, search: 'key'});
 * @export
 * @param {Object} data js物件資料
 * @returns {string} e.q. "id=1&search=key"
 */
export default function encodeQueryData(data) {
  return Object.keys(data).map(function(key) {
    return [key, data[key]].map(encodeURIComponent).join('=');
  }).join('&');
}
