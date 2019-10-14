import faker from 'faker'
import { factory } from 'factory-girl'

import User from '../src/app/models/User'
import Meetup from '../src/app/models/Meetup'
import File from '../src/app/models/File'

factory.define('User', User, {
  name: faker.name.findName(),
  email: faker.internet.email(),
  password: faker.internet.password(9),
})

factory.define('Meetup', Meetup, {
  title: faker.lorem.sentence(),
  description: faker.lorem.paragraph(),
  location: faker.address.city(),
  dateTime: faker.date.future(),
  bannerId: faker.random.number(),
})

factory.define('File', File, {
  file: faker.image.city(),
})

export default factory
