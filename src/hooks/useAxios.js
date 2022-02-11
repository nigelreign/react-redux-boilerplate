import { useState } from 'react'
import axios from 'axios'
import { Config } from 'config'
const useAxios = (httpMethod) => {
  const [response, setResponse] = useState(false)
  const [status, setStatus] = useState(null)
  const config = Config()

  async function httpRequest(url, payload, headers) {
    url = `${config.base_url}${url}`
    if (headers === undefined) {
      headers = {
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'cors',
      }
    }

    if (payload === undefined) {
      payload = ''
    }

    try {
      const data = await axios[httpMethod](url, payload, headers)
      setResponse(data)
      setStatus(true)
    } catch (error) {
      setResponse(error.response)
      setStatus(false)
    }
  }
  return [response, status, httpRequest]
}

export default useAxios
