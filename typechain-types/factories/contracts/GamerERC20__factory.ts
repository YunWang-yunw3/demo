/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  GamerERC20,
  GamerERC20Interface,
} from "../../contracts/GamerERC20";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "mintAddr",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "kill",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "nonces",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "mintAddr",
        type: "address",
      },
    ],
    name: "publicMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x6101406040523480156200001257600080fd5b506040516200299d3803806200299d8339818101604052810190620000389190620004eb565b6040518060400160405280600b81526020017f47616d657220427261696e000000000000000000000000000000000000000000815250806040518060400160405280600181526020017f31000000000000000000000000000000000000000000000000000000000000008152506040518060400160405280600b81526020017f47616d657220427261696e0000000000000000000000000000000000000000008152506040518060400160405280600281526020017f4742000000000000000000000000000000000000000000000000000000000000815250816003908051906020019062000129929190620003d1565b50806004908051906020019062000142929190620003d1565b50505060008280519060200120905060008280519060200120905060007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f90508260e081815250508161010081815250504660a08181525050620001ae8184846200021260201b60201c565b608081815250503073ffffffffffffffffffffffffffffffffffffffff1660c08173ffffffffffffffffffffffffffffffffffffffff16815250508061012081815250505050505050506200020b8160646200024e60201b60201c565b5062000752565b600083838346306040516020016200022f95949392919062000564565b6040516020818303038152906040528051906020012090509392505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415620002c1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620002b89062000622565b60405180910390fd5b620002d560008383620003c760201b60201c565b8060026000828254620002e9919062000673565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825462000340919062000673565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051620003a79190620006d0565b60405180910390a3620003c360008383620003cc60201b60201c565b5050565b505050565b505050565b828054620003df906200071c565b90600052602060002090601f0160209004810192826200040357600085556200044f565b82601f106200041e57805160ff19168380011785556200044f565b828001600101855582156200044f579182015b828111156200044e57825182559160200191906001019062000431565b5b5090506200045e919062000462565b5090565b5b808211156200047d57600081600090555060010162000463565b5090565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620004b38262000486565b9050919050565b620004c581620004a6565b8114620004d157600080fd5b50565b600081519050620004e581620004ba565b92915050565b60006020828403121562000504576200050362000481565b5b60006200051484828501620004d4565b91505092915050565b6000819050919050565b62000532816200051d565b82525050565b6000819050919050565b6200054d8162000538565b82525050565b6200055e81620004a6565b82525050565b600060a0820190506200057b600083018862000527565b6200058a602083018762000527565b62000599604083018662000527565b620005a8606083018562000542565b620005b7608083018462000553565b9695505050505050565b600082825260208201905092915050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b60006200060a601f83620005c1565b91506200061782620005d2565b602082019050919050565b600060208201905081810360008301526200063d81620005fb565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000620006808262000538565b91506200068d8362000538565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115620006c557620006c462000644565b5b828201905092915050565b6000602082019050620006e7600083018462000542565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200073557607f821691505b602082108114156200074c576200074b620006ed565b5b50919050565b60805160a05160c05160e05161010051610120516121fb620007a26000396000610f3c01526000610f7e01526000610f5d01526000610e9201526000610ee801526000610f1101526121fb6000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c806341c0e1b511610097578063a457c2d711610066578063a457c2d7146102b1578063a9059cbb146102e1578063d505accf14610311578063dd62ed3e1461032d57610100565b806341c0e1b51461022957806370a08231146102335780637ecebe001461026357806395d89b411461029357610100565b8063313ce567116100d3578063313ce567146101a157806332a93a3a146101bf5780633644e515146101db57806339509351146101f957610100565b806306fdde0314610105578063095ea7b31461012357806318160ddd1461015357806323b872dd14610171575b600080fd5b61010d61035d565b60405161011a9190611461565b60405180910390f35b61013d6004803603810190610138919061151c565b6103ef565b60405161014a9190611577565b60405180910390f35b61015b610412565b60405161016891906115a1565b60405180910390f35b61018b600480360381019061018691906115bc565b61041c565b6040516101989190611577565b60405180910390f35b6101a961044b565b6040516101b6919061162b565b60405180910390f35b6101d960048036038101906101d49190611646565b610454565b005b6101e3610462565b6040516101f0919061168c565b60405180910390f35b610213600480360381019061020e919061151c565b610471565b6040516102209190611577565b60405180910390f35b6102316104a8565b005b61024d60048036038101906102489190611646565b6104c1565b60405161025a91906115a1565b60405180910390f35b61027d60048036038101906102789190611646565b610509565b60405161028a91906115a1565b60405180910390f35b61029b610559565b6040516102a89190611461565b60405180910390f35b6102cb60048036038101906102c6919061151c565b6105eb565b6040516102d89190611577565b60405180910390f35b6102fb60048036038101906102f6919061151c565b610662565b6040516103089190611577565b60405180910390f35b61032b600480360381019061032691906116ff565b610685565b005b610347600480360381019061034291906117a1565b6107c7565b60405161035491906115a1565b60405180910390f35b60606003805461036c90611810565b80601f016020809104026020016040519081016040528092919081815260200182805461039890611810565b80156103e55780601f106103ba576101008083540402835291602001916103e5565b820191906000526020600020905b8154815290600101906020018083116103c857829003601f168201915b5050505050905090565b6000806103fa61084e565b9050610407818585610856565b600191505092915050565b6000600254905090565b60008061042761084e565b9050610434858285610a21565b61043f858585610aad565b60019150509392505050565b60006012905090565b61045f816064610d2e565b50565b600061046c610e8e565b905090565b60008061047c61084e565b905061049d81858561048e85896107c7565b6104989190611871565b610856565b600191505092915050565b3073ffffffffffffffffffffffffffffffffffffffff16ff5b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6000610552600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020610fa8565b9050919050565b60606004805461056890611810565b80601f016020809104026020016040519081016040528092919081815260200182805461059490611810565b80156105e15780601f106105b6576101008083540402835291602001916105e1565b820191906000526020600020905b8154815290600101906020018083116105c457829003601f168201915b5050505050905090565b6000806105f661084e565b9050600061060482866107c7565b905083811015610649576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161064090611939565b60405180910390fd5b6106568286868403610856565b60019250505092915050565b60008061066d61084e565b905061067a818585610aad565b600191505092915050565b834211156106c8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106bf906119a5565b60405180910390fd5b60007f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98888886106f78c610fb6565b8960405160200161070d969594939291906119d4565b604051602081830303815290604052805190602001209050600061073082611014565b905060006107408287878761102e565b90508973ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146107b0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107a790611a81565b60405180910390fd5b6107bb8a8a8a610856565b50505050505050505050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156108c6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108bd90611b13565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610936576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161092d90611ba5565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92583604051610a1491906115a1565b60405180910390a3505050565b6000610a2d84846107c7565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114610aa75781811015610a99576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a9090611c11565b60405180910390fd5b610aa68484848403610856565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610b1d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b1490611ca3565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610b8d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b8490611d35565b60405180910390fd5b610b98838383611059565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610c1e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c1590611dc7565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610cb19190611871565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610d1591906115a1565b60405180910390a3610d2884848461105e565b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610d9e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d9590611e33565b60405180910390fd5b610daa60008383611059565b8060026000828254610dbc9190611871565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610e119190611871565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610e7691906115a1565b60405180910390a3610e8a6000838361105e565b5050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff16148015610f0a57507f000000000000000000000000000000000000000000000000000000000000000046145b15610f37577f00000000000000000000000000000000000000000000000000000000000000009050610fa5565b610fa27f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611063565b90505b90565b600081600001549050919050565b600080600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020905061100381610fa8565b915061100e8161109d565b50919050565b6000611027611021610e8e565b836110b3565b9050919050565b600080600061103f878787876110e6565b9150915061104c816111f3565b8192505050949350505050565b505050565b505050565b6000838383463060405160200161107e959493929190611e53565b6040516020818303038152906040528051906020012090509392505050565b6001816000016000828254019250508190555050565b600082826040516020016110c8929190611f1e565b60405160208183030381529060405280519060200120905092915050565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08360001c11156111215760006003915091506111ea565b601b8560ff16141580156111395750601c8560ff1614155b1561114b5760006004915091506111ea565b6000600187878787604051600081526020016040526040516111709493929190611f55565b6020604051602081039080840390855afa158015611192573d6000803e3d6000fd5b505050602060405103519050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156111e1576000600192509250506111ea565b80600092509250505b94509492505050565b6000600481111561120757611206611f9a565b5b81600481111561121a57611219611f9a565b5b1415611225576113c5565b6001600481111561123957611238611f9a565b5b81600481111561124c5761124b611f9a565b5b141561128d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161128490612015565b60405180910390fd5b600260048111156112a1576112a0611f9a565b5b8160048111156112b4576112b3611f9a565b5b14156112f5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112ec90612081565b60405180910390fd5b6003600481111561130957611308611f9a565b5b81600481111561131c5761131b611f9a565b5b141561135d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161135490612113565b60405180910390fd5b6004808111156113705761136f611f9a565b5b81600481111561138357611382611f9a565b5b14156113c4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113bb906121a5565b60405180910390fd5b5b50565b600081519050919050565b600082825260208201905092915050565b60005b838110156114025780820151818401526020810190506113e7565b83811115611411576000848401525b50505050565b6000601f19601f8301169050919050565b6000611433826113c8565b61143d81856113d3565b935061144d8185602086016113e4565b61145681611417565b840191505092915050565b6000602082019050818103600083015261147b8184611428565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006114b382611488565b9050919050565b6114c3816114a8565b81146114ce57600080fd5b50565b6000813590506114e0816114ba565b92915050565b6000819050919050565b6114f9816114e6565b811461150457600080fd5b50565b600081359050611516816114f0565b92915050565b6000806040838503121561153357611532611483565b5b6000611541858286016114d1565b925050602061155285828601611507565b9150509250929050565b60008115159050919050565b6115718161155c565b82525050565b600060208201905061158c6000830184611568565b92915050565b61159b816114e6565b82525050565b60006020820190506115b66000830184611592565b92915050565b6000806000606084860312156115d5576115d4611483565b5b60006115e3868287016114d1565b93505060206115f4868287016114d1565b925050604061160586828701611507565b9150509250925092565b600060ff82169050919050565b6116258161160f565b82525050565b6000602082019050611640600083018461161c565b92915050565b60006020828403121561165c5761165b611483565b5b600061166a848285016114d1565b91505092915050565b6000819050919050565b61168681611673565b82525050565b60006020820190506116a1600083018461167d565b92915050565b6116b08161160f565b81146116bb57600080fd5b50565b6000813590506116cd816116a7565b92915050565b6116dc81611673565b81146116e757600080fd5b50565b6000813590506116f9816116d3565b92915050565b600080600080600080600060e0888a03121561171e5761171d611483565b5b600061172c8a828b016114d1565b975050602061173d8a828b016114d1565b965050604061174e8a828b01611507565b955050606061175f8a828b01611507565b94505060806117708a828b016116be565b93505060a06117818a828b016116ea565b92505060c06117928a828b016116ea565b91505092959891949750929550565b600080604083850312156117b8576117b7611483565b5b60006117c6858286016114d1565b92505060206117d7858286016114d1565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061182857607f821691505b6020821081141561183c5761183b6117e1565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061187c826114e6565b9150611887836114e6565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156118bc576118bb611842565b5b828201905092915050565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b60006119236025836113d3565b915061192e826118c7565b604082019050919050565b6000602082019050818103600083015261195281611916565b9050919050565b7f45524332305065726d69743a206578706972656420646561646c696e65000000600082015250565b600061198f601d836113d3565b915061199a82611959565b602082019050919050565b600060208201905081810360008301526119be81611982565b9050919050565b6119ce816114a8565b82525050565b600060c0820190506119e9600083018961167d565b6119f660208301886119c5565b611a0360408301876119c5565b611a106060830186611592565b611a1d6080830185611592565b611a2a60a0830184611592565b979650505050505050565b7f45524332305065726d69743a20696e76616c6964207369676e61747572650000600082015250565b6000611a6b601e836113d3565b9150611a7682611a35565b602082019050919050565b60006020820190508181036000830152611a9a81611a5e565b9050919050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000611afd6024836113d3565b9150611b0882611aa1565b604082019050919050565b60006020820190508181036000830152611b2c81611af0565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b6000611b8f6022836113d3565b9150611b9a82611b33565b604082019050919050565b60006020820190508181036000830152611bbe81611b82565b9050919050565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b6000611bfb601d836113d3565b9150611c0682611bc5565b602082019050919050565b60006020820190508181036000830152611c2a81611bee565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b6000611c8d6025836113d3565b9150611c9882611c31565b604082019050919050565b60006020820190508181036000830152611cbc81611c80565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b6000611d1f6023836113d3565b9150611d2a82611cc3565b604082019050919050565b60006020820190508181036000830152611d4e81611d12565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b6000611db16026836113d3565b9150611dbc82611d55565b604082019050919050565b60006020820190508181036000830152611de081611da4565b9050919050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b6000611e1d601f836113d3565b9150611e2882611de7565b602082019050919050565b60006020820190508181036000830152611e4c81611e10565b9050919050565b600060a082019050611e68600083018861167d565b611e75602083018761167d565b611e82604083018661167d565b611e8f6060830185611592565b611e9c60808301846119c5565b9695505050505050565b600081905092915050565b7f1901000000000000000000000000000000000000000000000000000000000000600082015250565b6000611ee7600283611ea6565b9150611ef282611eb1565b600282019050919050565b6000819050919050565b611f18611f1382611673565b611efd565b82525050565b6000611f2982611eda565b9150611f358285611f07565b602082019150611f458284611f07565b6020820191508190509392505050565b6000608082019050611f6a600083018761167d565b611f77602083018661161c565b611f84604083018561167d565b611f91606083018461167d565b95945050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b7f45434453413a20696e76616c6964207369676e61747572650000000000000000600082015250565b6000611fff6018836113d3565b915061200a82611fc9565b602082019050919050565b6000602082019050818103600083015261202e81611ff2565b9050919050565b7f45434453413a20696e76616c6964207369676e6174757265206c656e67746800600082015250565b600061206b601f836113d3565b915061207682612035565b602082019050919050565b6000602082019050818103600083015261209a8161205e565b9050919050565b7f45434453413a20696e76616c6964207369676e6174757265202773272076616c60008201527f7565000000000000000000000000000000000000000000000000000000000000602082015250565b60006120fd6022836113d3565b9150612108826120a1565b604082019050919050565b6000602082019050818103600083015261212c816120f0565b9050919050565b7f45434453413a20696e76616c6964207369676e6174757265202776272076616c60008201527f7565000000000000000000000000000000000000000000000000000000000000602082015250565b600061218f6022836113d3565b915061219a82612133565b604082019050919050565b600060208201905081810360008301526121be81612182565b905091905056fea264697066735822122035935f8b4177b848913bd32c55c5409c3bc238c84660552d4ca1e9891b2e383f64736f6c63430008090033";

type GamerERC20ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GamerERC20ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class GamerERC20__factory extends ContractFactory {
  constructor(...args: GamerERC20ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    mintAddr: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<GamerERC20> {
    return super.deploy(mintAddr, overrides || {}) as Promise<GamerERC20>;
  }
  override getDeployTransaction(
    mintAddr: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(mintAddr, overrides || {});
  }
  override attach(address: string): GamerERC20 {
    return super.attach(address) as GamerERC20;
  }
  override connect(signer: Signer): GamerERC20__factory {
    return super.connect(signer) as GamerERC20__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GamerERC20Interface {
    return new utils.Interface(_abi) as GamerERC20Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GamerERC20 {
    return new Contract(address, _abi, signerOrProvider) as GamerERC20;
  }
}