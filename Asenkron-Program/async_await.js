'use strict'
/**
 * Aslinda ES8 ile birlikte gelen async/await Promise yapisinda birden fazla 
 * .then() yerine normal senkron bir kod gibi kodunuzu yazabilirsiniz.
 * try==cathc mekanizmasinida direk kullanabiliyoruz 
 */
const showAvatar = async () => {
    // read github user
    let githubResponse = await fetch('http://api.github.com/users/cokyaman65')
    let githubUser = await githubResponse.json()

    //show the avatar
    let img = document.createElement('img')
    img.src = githubUser.avatar_url
    img.className = 'promise-avatar-example'
    document.body.append(img)

    //wait 3 seconds
    await new Promise((resolve, reject) => setTimeout(resolve, 3000))
    img.remove()
 
}

showAvatar()
