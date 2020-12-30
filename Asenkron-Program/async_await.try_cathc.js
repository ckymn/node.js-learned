// Promise:
/*const waitThenCall = msg => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(msg + "success")
    }, 1000)
  })
}

waitThenCall('Hello_')
  .finally(() => {
    console.log('Promise ready..')
  })
  .then(
    response => {
      console.log(response)
      return waitThenCall('Hello2_')
    },
    err => {}
  )
  .then(
    response => {
      console.log(response)
      return waitThenCall('Hello3_')
    },
    err => undefined
  )
  .catch(err => {
    console.log(err)
  })
*/

// Async-Await
const waitThenCall = msg => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(msg + ' success')
    }, 1000)
  })
}

async function run () {
  try {
    const result = await waitThenCall('Hello1')
    console.log(result)
    const result2 = await waitThenCall('Hello2')
    console.log(result2)
    console.log('Hello')
  } catch (e) {
    console.log(e)
  }
}

run()