const getAccessToken = url => {
  let regex = /\=.*?\&/g
  console.log(url)
  url = url.match(regex)

  console.log(url[0].substring(1, url[0].length - 1))
}

export default getAccessToken;
