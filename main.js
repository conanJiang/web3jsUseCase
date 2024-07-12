const { Web3 } = require('web3');
console.log("Version:",Web3.version);
const web3 = new Web3('http://127.0.0.1:7545');
const contractAddress = '0x60D28120A20FdFE25009f6E68850Ac33d495ea2f';
const abi = [
    {
        "inputs": [],
        "name": "retrieve",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "num",
                "type": "uint256"
            }
        ],
        "name": "store",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];

const contract = new web3.eth.Contract(abi, contractAddress);

contract.methods.store(5000).send({ from: '0xaC79F0DE2AEf022b4783604402c6c89d07A3FA6f' })
.then(receipt => {console.log('Transaction receipt:', receipt);
})
.catch(error => {console.error('Error:', error);
});


contract.methods.retrieve().call()
    .then(value => {console.log('Current value:', value);
    })
    .catch(error => {console.error('Error:', error);
    });

