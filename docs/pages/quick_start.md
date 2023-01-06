## Quick Start

### 1、Introduce
Opencord is the Web 3.0 social platform built for DAOs. It is deesigned for the efficient connections of DAOs, the
seamless connections of DApps, and the like-mindedness connections of DAO friends.
We make it easy for you to discover and manage your favoriteDAOs by connecting easy-to-use DAO tools and
DApps to power up your DAO workflow. Take your web3 socialconnections to the next level with token-gating,
web3 identity, and more.
With Opencord, you get:
Seamlessly switch between chat, voice, forum, links, and moree.
- Interact directly with DApps, DAO tools, and other awesome things.
- Token-gate your communities, no clunky bots needed.
- Highlight your web3 identity with NFTs, POAPs, and more.
- Bring your own identity, data and reputation
We are built for DAOs and building together with DAO friends. Come and join us to build the ideal Web3
homebase and shape the future.

Our SDK is dedicated to providing some services for opencord plugins

### 2、Simple example
#### 2.1、Install
```shell
npm install opencord-plugin-js-sdk
or
yarn add opencord-plugin-js-sdk
```

#### 2.2、login
```javascript
import Api from 'opencord-plugin-js-sdk'

const { getCode } = Api;

function async login() {
  const { code,address } = await getCode();
  // todo something
}
```

