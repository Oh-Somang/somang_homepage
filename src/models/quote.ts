import mongoose, { Schema } from 'mongoose'

const quoteSchema = new Schema(
  {
    text: String,
    author: String,
  },
  {
    timestamps: true,
  }
)

const Quote = mongoose.models.Quote || mongoose.model('Quote', quoteSchema)

export default Quote
