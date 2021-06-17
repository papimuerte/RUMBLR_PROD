import keys_prod from './keys_prod'
import keys_dev from './keys_dev.js'


if (process.env.NODE_ENV === 'production') {
  export default keys_prod;
} else {
  export default keys_dev;
}