/*
  Mocks for the Adapter library.
*/

const ipfs = {
  ipfsAdapter: {
    ipfs: {}
  },
  ipfsCoordAdapter: {
    ipfsCoord: {
      useCases: {
        peer: {
          sendPrivateMessage: () => {}
        }
      }
    }
  }
}

const localdb = {
  Users: class Users {
    static findById () {}
    static find () {}
    static findOne () {
      return {
        validatePassword: localdb.validatePassword
      }
    }

    async save () {
      return {}
    }

    generateToken () {
      return '123'
    }

    toJSON () {
      return {}
    }

    async remove () {
      return true
    }

    async validatePassword () {
      return true
    }
  },

  validatePassword: () => {
    return true
  }
}

const slpIndexer = {
  query: {
    getAddress: () => {},
    getTx: () => {},
    getToken: () => {}
  },
  blacklist: {
    checkBlacklist: () => {}
  }
}

module.exports = { ipfs, localdb, slpIndexer }
