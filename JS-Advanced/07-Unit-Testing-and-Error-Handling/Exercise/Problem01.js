function solve(request) {

  


  if (request.method !== 'GET' && request.method !== 'POST' && request.method !== 'DELETE' && request.method !== 'CONNECT') {
    throw new Error('Invalid request header: Invalid Method');
  }
  if (!request.uri) {
    throw new Error('Invalid request header: Invalid URI');
  }

  if (request.version !== 'HTTP/0.9' && request.version !== 'HTTP/1.0' && request.version !== 'HTTP/1.1' && request.version !== 'HTTP/2.0') {
    throw new Error('Invalid request header: Invalid Version');
  }
  if (!request.message) {
    throw new Error('Invalid request header: Invalid Message');
  }


  
  return request
}
