const simpleAuthGuard = (req,res,next) => {
  //Check authentication logic ...
  const isAuth = true

  if (isAuth)  next()
  else next(new Error('Please auth'))
}

export { simpleAuthGuard }
