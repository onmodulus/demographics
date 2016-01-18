export default {
  host: process.env.HOST || '0.0.0.0',
  mongo: {
    url: process.env.MONGO_URL || 'mongodb://localhost:27017/Demographics'
  },
  port: process.env.PORT || '8000'
}
