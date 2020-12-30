// get and post with   Async/Await
async function get (url) {
  //otomotik olusmus Promise`ler
  const response = await fetch(url)
  const data = await response.json()

  await new Promise((resolve, reject) => setTimeout(resolve, 3000))

  return data
}

get('http://api.github.com/users/cokyaman65')
  .then(data => console.log(data))
  .catch(err => console.log(err))
