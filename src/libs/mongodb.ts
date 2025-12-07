import mongoose from 'mongoose'

export default async function connectMongoDB() {
  try {
    if (mongoose.connection.readyState === 1) {
      return
    }

    await mongoose.connect(process.env.MONGODB_URI as string)
    console.log('MongoDB Connected Successfully')
  } catch (error) {
    console.error('MongoDB Connection Error: ', error)
  }
}

