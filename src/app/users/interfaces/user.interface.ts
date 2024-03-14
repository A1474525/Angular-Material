export interface User {
  id: number
  name: string | null,
  username: string | null,
  email: string | null,
  address: Address | null,
  phone: string | null,
  website: string | null,
  company: Company | null
}

interface Address {
  street: string | null,
  suite: string | null,
  city: string | null,
  zipcode: string | null,
  geo: Geo | null
}

interface Geo {
  lat: string | null,
  lng: string | null
}

interface Company {
  name: string | null,
  catchPhrase: string | null,
  bs: string | null
}
