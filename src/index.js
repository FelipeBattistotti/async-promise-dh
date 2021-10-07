const fPromise = (time) => {
  return new Promise(resolve => {
    setTimeout(() => resolve(time), time)
  })
}

const start = async () => {
  const response = await fPromise(2000)
  console.log('ETAPA 2', response)
}

start()
