import {app} from "./app"
import {API_PORT} from './src/config/config'

app.listen(API_PORT, () => console.log(API_PORT))