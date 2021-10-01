const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const { interface, bytecode } = require("./compile");


const provider = new HDWalletProvider(
    "panel system popular occur insane rapid hammer tube dizzy duck judge owner",
    "https://rinkeby.infura.io/v3/1b470ee288ea462f80f3f81e04927ce4"
);

const web3 = new Web3(provider);


const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log("deployando", accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode, arguments: ["Hi there!"] })
        .send({ gas: '1000000', gasPrice: '5000000000', from: accounts[0] });
    
    
    console.log("deployando", result.options.address);
};

deploy();