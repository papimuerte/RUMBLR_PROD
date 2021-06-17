import keys_prod from './keys_prod'
import keys_dev from './keys_dev.js'

export default process.env.NODE_ENV === 'development' ? keys_dev : keys_prod;