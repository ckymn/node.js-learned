'use strict'
/**
 * Aslinda ES8 ile birlikte gelen async/await Promise yapisinda birden fazla
 * .then() yerine normal senkron bir kod gibi kodunuzu yazabilirsiniz.
 * try==cathc mekanizmasinida direk kullanabiliyoruz
 * await === resolve() or reject()
 * resolve() === try
 * reject() === cathc
 */
const showAvatar = async url => {
  // read github user
  let githubResponse = await fetch(url) // buda bir promise
  let githubUser = await githubResponse.json() // buda bir pomise tir.

  //show the avatar
  let img = document.createElement('img')
  img.src = githubUser.avatar_url
  img.className = 'promise-avatar-example'
  document.body.append(img)

  // if you want the img wait 3 seconds
  await new Promise((resolve, reject) => setTimeout(resolve, 3000))
  img.remove()

  return githubUser
}

showAvatar('http://api.github.com/users/cokyaman65')
  .then(githubUser => console.log(githubUser))
  .catch(err => console.log(err))
