import supertest from "supertest"
import app from './app.js'
import { simpleAuthGuard } from "./middlewares/simpleAuthGuard";
import { advancedAuthGuard } from "./middlewares/advancedAuthGuard";



jest.mock("./middlewares/simpleAuthGuard")
jest.mock("./middlewares/advancedAuthGuard")

const request = supertest(app)

beforeEach(()=>{
  jest.clearAllMocks()
})



// This one does't work and make crash all test suit
it.only("should '/route1' with advanced middleware work", async ()=>{

  const mockedMiddleware = jest.fn().mockImplementation((res, req, next)=> {
    console.log("------- ADVANCED AUTH GUARD MIDDLEWARE WONT WORK -----------")
    return next()
  })
  advancedAuthGuard.mockReturnValue(mockedMiddleware)
  const res = await request.get("/route1")
  expect(res.status).toEqual(200)
})




//This one work verry well
it("should '/route2' with simple middleware work", async ()=>{
  simpleAuthGuard.mockImplementation((res, req, next)=> {
    console.log("------- SIMPLE AUTH GUARD MIDDLEWARE WORK -----------")
    return next()
  })
  const res = await request.get("/route2")
  expect(res.status).toEqual(200)

})

