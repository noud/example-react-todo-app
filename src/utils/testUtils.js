export const mockResponse = (status, statusText, response) => new window.Response(response, {
  status: status,
  statusText: statusText,
  headers: {
    'Content-type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
});