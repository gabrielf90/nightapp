import request from 'request'


export const createConection = async (endpoint, req, method = 'POST', key ='505c51cd3d587d568ed55aa5d76b1798bbb8e61c271d0b9a9f19a39a08e1b807') => {
  return new Promise((resolve, reject) => {
      request({
        method: method,
        url: ` https://sandbox.asaas.com/api/v3${endpoint}`,
        headers: {
          'Content-Type': 'application/json',
          'access_token': key
        },
        body: JSON.stringify(req)
      }, function (error, response, body) {
        const status = response.statusCode
        const respostaServidor =  JSON.parse(body);
        const respostaFinal = {
          status,
          resposta:respostaServidor
        }
        resolve(respostaFinal)
      })
  })
}