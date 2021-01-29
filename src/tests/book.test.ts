import request from 'supertest'
import App from '../app'
import BooksRoute from '../routes/books.route'

interface bookResponse {
  bookId: number
  title: string
  description: string
  availableQuantity: number
  author: string
  price: number
  rentPerDay: number
  createdAt: string
  updatedAt: string
}

describe('Testing Books', () => {
  describe('[GET] /books', () => {
    const booksRoute = new BooksRoute()
    const app = new App([booksRoute])
    it('should get all books', async () => {
      const response = await request('http://localhost:5000').get(booksRoute.path).expect(200)
      expect(response.body.data).toEqual(expect.objectContaining({ books: expect.arrayContaining([expect.any(Object)]) }))
    })
  })
})
