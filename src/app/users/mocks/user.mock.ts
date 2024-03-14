import {User} from "../interfaces/user.interface";

export function getMockedUser(user?: Partial<User>): User {
  const defaultGeo = {
    lat: null,
    lng: null
  }

  const defaultAddress = {
    street: null,
    suite: null,
    city: null,
    zipcode: null,
    geo: defaultGeo
  }

  const defaultCompany = {
    name: null,
    catchPhrase: null,
    bs: null
  }

  const defaultUser = {
    id: 0,
    name: null,
    username: null,
    email: null,
    address: defaultAddress,
    phone: null,
    website: null,
    company: defaultCompany
  }

  return {
    ...defaultUser,
    ...user
  }
}
