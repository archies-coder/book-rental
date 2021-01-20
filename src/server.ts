import 'dotenv/config'
import BookRentalRoute from './routes/book_rental.route'
import App from './app'
import Route from './interfaces/routes.interface'
import AuthRoute from './routes/auth.route'
import BooksRoute from './routes/books.route'
import IndexRoute from './routes/index.route'
import UsersRoute from './routes/users.route'
import validateEnv from './utils/validateEnv'

validateEnv()

const routes: Route[] = [new IndexRoute(), new UsersRoute(), new AuthRoute(), new BooksRoute(), new BookRentalRoute()]

const app = new App(routes)

app.listen()
