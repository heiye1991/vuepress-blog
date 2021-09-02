const { createSideBarConfig } = require('./util')
const OTHERS_PATH = '/blogs/others'

module.exports = {
  [OTHERS_PATH]: [createSideBarConfig('others', OTHERS_PATH)],
}
