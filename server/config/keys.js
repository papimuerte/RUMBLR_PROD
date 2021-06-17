import keys_prod from './keys_prod.js'
import keys_dev from './keys_dev.js'


if (process.env.NODE_ENV === 'production') {
  module.exports = keys_prod;
} else {
  module.exports = keys_dev;
}