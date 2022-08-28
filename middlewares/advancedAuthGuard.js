const advancedAuthGuard = (additionalCondition) => (req,res,next) => {

  //Check authentication logic ...
  const isAuth = true

  if (isAuth && !additionalCondition)
    next()
  else
    next(new Error('Please auth'))
}

export { advancedAuthGuard }
