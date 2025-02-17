"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WETH9 = exports.constructSameAddressMap = exports.MULTICALL2_ADDRESS = exports.V3_MIGRATOR_ADDRESS = exports.NONFUNGIBLE_POSITION_MANAGER_ADDRESS = exports.TICK_LENS_ADDRESS = exports.ARB_GASINFO_ADDRESS = exports.OVM_GASPRICE_ADDRESS = exports.SWAP_ROUTER_02_ADDRESSES = exports.UNISWAP_MULTICALL_ADDRESSES = exports.MIXED_ROUTE_QUOTER_V1_ADDRESSES = exports.QUOTER_V2_ADDRESSES = exports.V3_CORE_FACTORY_ADDRESSES = exports.MANTA_TESTNET_V3_MIGRATOR_ADDRESS = exports.MANTA_TESTNET_SWAP_ROUTER_02_ADDRESS = exports.MANTA_TESTNET_NONFUNGIBLE_POSITION_MANAGER_ADDRESS = exports.MANTA_TESTNET_TICK_LENS_ADDRESS = exports.MANTA_V3_MIGRATOR_ADDRESS = exports.MANTA_SWAP_ROUTER_02_ADDRESS = exports.MANTA_NONFUNGIBLE_POSITION_MANAGER_ADDRESS = exports.MANTA_TICK_LENS_ADDRESS = void 0;
const sdk_core_1 = require("@uniswap/sdk-core");
const v3_sdk_1 = require("@uniswap/v3-sdk");
const chains_1 = require("./chains");
const MANTA_V3_CORE_FACTORY_ADDRESSES = '0x481F4b658d1447A9559B220640Fb79C2B993032A';
const MANTA_QUOTER_ADDRESSES = '0xD82dA8F3e942ef8E5fe88AbF896659159A502E6f';
const MANTA_MULTICALL_ADDRESS = '0xcBA11549A0206432af38B78C29171573b89D2ac3';
exports.MANTA_TICK_LENS_ADDRESS = '0x0D9CBCA9c0e3517aB9d414A09ABAAa8257e70E51';
exports.MANTA_NONFUNGIBLE_POSITION_MANAGER_ADDRESS = '0xE0836a2DFd8Ba6C63786803EA75DF801383af68C';
exports.MANTA_SWAP_ROUTER_02_ADDRESS = '0xC9D4926c1241cb83339c42ee24fb7e8a8637D6Ad';
exports.MANTA_V3_MIGRATOR_ADDRESS = '0xE810cAca8a86907ffEEfC7Ee4787559dcdf698B9';
const MANTA_TESTNET_V3_CORE_FACTORY_ADDRESSES = '0x3B7E491E73eDF4c330b35D0706352B6bb92232E0';
const MANTA_TESTNET_QUOTER_ADDRESSES = '0x3aBD06F1773b2e845C9F37dEc93A9a018fc2fAC8';
const MANTA_TESTNET_MULTICALL_ADDRESS = '0x751fc1884628fc943cb766714a79eC467faefB01';
exports.MANTA_TESTNET_TICK_LENS_ADDRESS = '0x4E9a7cF6823E2D8Fc0fE16c321ceF982E49C0a1f';
exports.MANTA_TESTNET_NONFUNGIBLE_POSITION_MANAGER_ADDRESS = '0xB6a264a95993Cd4FfF22B9B2d98605964E0f4D86';
exports.MANTA_TESTNET_SWAP_ROUTER_02_ADDRESS = '0xF23F011Bd42E08fc32377b4bBf43FDF8a47EaBe3';
exports.MANTA_TESTNET_V3_MIGRATOR_ADDRESS = '0x84Ecbb66f32db87A9b0AbFF51fD7fa6E4F633132';
exports.V3_CORE_FACTORY_ADDRESSES = Object.assign(Object.assign({}, constructSameAddressMap(v3_sdk_1.FACTORY_ADDRESS)), { [chains_1.ChainId.MANTA]: MANTA_V3_CORE_FACTORY_ADDRESSES, [chains_1.ChainId.MANTA_TESTNET]: MANTA_TESTNET_V3_CORE_FACTORY_ADDRESSES });
exports.QUOTER_V2_ADDRESSES = Object.assign(Object.assign({}, constructSameAddressMap('0x61fFE014bA17989E743c5F6cB21bF9697530B21e')), { [chains_1.ChainId.MANTA]: MANTA_QUOTER_ADDRESSES, [chains_1.ChainId.MANTA_TESTNET]: MANTA_TESTNET_QUOTER_ADDRESSES });
exports.MIXED_ROUTE_QUOTER_V1_ADDRESSES = {
    [chains_1.ChainId.MAINNET]: '0x84E44095eeBfEC7793Cd7d5b57B7e401D7f1cA2E',
};
exports.UNISWAP_MULTICALL_ADDRESSES = Object.assign(Object.assign({}, constructSameAddressMap('0x1F98415757620B543A52E61c46B32eB19261F984')), { [chains_1.ChainId.MANTA]: MANTA_MULTICALL_ADDRESS, [chains_1.ChainId.MANTA_TESTNET]: MANTA_TESTNET_MULTICALL_ADDRESS });
const SWAP_ROUTER_02_ADDRESSES = (chainId) => {
    if (chainId == chains_1.ChainId.MANTA) {
        return exports.MANTA_SWAP_ROUTER_02_ADDRESS;
    }
    if (chainId == chains_1.ChainId.MANTA_TESTNET) {
        return exports.MANTA_TESTNET_SWAP_ROUTER_02_ADDRESS;
    }
    return '0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45';
};
exports.SWAP_ROUTER_02_ADDRESSES = SWAP_ROUTER_02_ADDRESSES;
exports.OVM_GASPRICE_ADDRESS = '0x420000000000000000000000000000000000000F';
exports.ARB_GASINFO_ADDRESS = '0x000000000000000000000000000000000000006C';
exports.TICK_LENS_ADDRESS = '0x4E9a7cF6823E2D8Fc0fE16c321ceF982E49C0a1f';
exports.NONFUNGIBLE_POSITION_MANAGER_ADDRESS = '0xB6a264a95993Cd4FfF22B9B2d98605964E0f4D86';
exports.V3_MIGRATOR_ADDRESS = '0x84Ecbb66f32db87A9b0AbFF51fD7fa6E4F633132';
exports.MULTICALL2_ADDRESS = '0x751fc1884628fc943cb766714a79eC467faefB01';
function constructSameAddressMap(address, additionalNetworks = []) {
    return chains_1.NETWORKS_WITH_SAME_UNISWAP_ADDRESSES.concat(additionalNetworks).reduce((memo, chainId) => {
        memo[chainId] = address;
        return memo;
    }, {});
}
exports.constructSameAddressMap = constructSameAddressMap;
exports.WETH9 = {
    [chains_1.ChainId.MAINNET]: new sdk_core_1.Token(chains_1.ChainId.MAINNET, '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', 18, 'WETH', 'Wrapped Ether'),
    [chains_1.ChainId.MANTA]: new sdk_core_1.Token(chains_1.ChainId.MANTA, '0x0Dc808adcE2099A9F62AA87D9670745AbA741746', 18, 'WETH', 'Wrapped Ether'),
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzc2VzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3V0aWwvYWRkcmVzc2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLGdEQUEwQztBQUMxQyw0Q0FBa0Q7QUFFbEQscUNBQXlFO0FBR3pFLE1BQU0sK0JBQStCLEdBQUcsNENBQTRDLENBQUM7QUFDckYsTUFBTSxzQkFBc0IsR0FBRyw0Q0FBNEMsQ0FBQztBQUM1RSxNQUFNLHVCQUF1QixHQUFHLDRDQUE0QyxDQUFDO0FBQ2hFLFFBQUEsdUJBQXVCLEdBQ2xDLDRDQUE0QyxDQUFDO0FBQ2xDLFFBQUEsMENBQTBDLEdBQ3JELDRDQUE0QyxDQUFDO0FBQ2xDLFFBQUEsNEJBQTRCLEdBQ3ZDLDRDQUE0QyxDQUFDO0FBQ2xDLFFBQUEseUJBQXlCLEdBQ3BDLDRDQUE0QyxDQUFDO0FBRy9DLE1BQU0sdUNBQXVDLEdBQUcsNENBQTRDLENBQUM7QUFDN0YsTUFBTSw4QkFBOEIsR0FBRyw0Q0FBNEMsQ0FBQztBQUNwRixNQUFNLCtCQUErQixHQUFHLDRDQUE0QyxDQUFDO0FBQ3hFLFFBQUEsK0JBQStCLEdBQzFDLDRDQUE0QyxDQUFDO0FBQ2xDLFFBQUEsa0RBQWtELEdBQzdELDRDQUE0QyxDQUFDO0FBQ2xDLFFBQUEsb0NBQW9DLEdBQy9DLDRDQUE0QyxDQUFDO0FBQ2xDLFFBQUEsaUNBQWlDLEdBQzVDLDRDQUE0QyxDQUFDO0FBR2xDLFFBQUEseUJBQXlCLG1DQUNqQyx1QkFBdUIsQ0FBQyx3QkFBZSxDQUFDLEtBQzNDLENBQUMsZ0JBQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSwrQkFBK0IsRUFDaEQsQ0FBQyxnQkFBTyxDQUFDLGFBQWEsQ0FBQyxFQUFFLHVDQUF1QyxJQUVoRTtBQUVXLFFBQUEsbUJBQW1CLG1DQUMzQix1QkFBdUIsQ0FBQyw0Q0FBNEMsQ0FBQyxLQUN4RSxDQUFDLGdCQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsc0JBQXNCLEVBQ3ZDLENBQUMsZ0JBQU8sQ0FBQyxhQUFhLENBQUMsRUFBRSw4QkFBOEIsSUFFdkQ7QUFFVyxRQUFBLCtCQUErQixHQUFlO0lBQ3pELENBQUMsZ0JBQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSw0Q0FBNEM7Q0FDaEUsQ0FBQztBQUVXLFFBQUEsMkJBQTJCLG1DQUNuQyx1QkFBdUIsQ0FBQyw0Q0FBNEMsQ0FBQyxLQUN4RSxDQUFDLGdCQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsdUJBQXVCLEVBQ3hDLENBQUMsZ0JBQU8sQ0FBQyxhQUFhLENBQUMsRUFBRSwrQkFBK0IsSUFFeEQ7QUFFSyxNQUFNLHdCQUF3QixHQUFHLENBQUMsT0FBZSxFQUFFLEVBQUU7SUFDMUQsSUFBSSxPQUFPLElBQUksZ0JBQU8sQ0FBQyxLQUFLLEVBQUU7UUFDNUIsT0FBTyxvQ0FBNEIsQ0FBQztLQUNyQztJQUNELElBQUksT0FBTyxJQUFJLGdCQUFPLENBQUMsYUFBYSxFQUFFO1FBQ3BDLE9BQU8sNENBQW9DLENBQUM7S0FDN0M7SUFDRCxPQUFPLDRDQUE0QyxDQUFDO0FBQ3RELENBQUMsQ0FBQztBQVJXLFFBQUEsd0JBQXdCLDRCQVFuQztBQUVXLFFBQUEsb0JBQW9CLEdBQy9CLDRDQUE0QyxDQUFDO0FBQ2xDLFFBQUEsbUJBQW1CLEdBQUcsNENBQTRDLENBQUM7QUFDbkUsUUFBQSxpQkFBaUIsR0FBRyw0Q0FBNEMsQ0FBQztBQUNqRSxRQUFBLG9DQUFvQyxHQUMvQyw0Q0FBNEMsQ0FBQztBQUNsQyxRQUFBLG1CQUFtQixHQUFHLDRDQUE0QyxDQUFDO0FBQ25FLFFBQUEsa0JBQWtCLEdBQUcsNENBQTRDLENBQUM7QUFJL0UsU0FBZ0IsdUJBQXVCLENBQ3JDLE9BQVUsRUFDVixxQkFBZ0MsRUFBRTtJQUVsQyxPQUFPLDZDQUFvQyxDQUFDLE1BQU0sQ0FDaEQsa0JBQWtCLENBQ25CLENBQUMsTUFBTSxDQUVMLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxFQUFFO1FBQ25CLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxPQUFPLENBQUM7UUFDeEIsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDVCxDQUFDO0FBWkQsMERBWUM7QUFFWSxRQUFBLEtBQUssR0FLZDtJQUNGLENBQUMsZ0JBQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxJQUFJLGdCQUFLLENBQzFCLGdCQUFPLENBQUMsT0FBTyxFQUNmLDRDQUE0QyxFQUM1QyxFQUFFLEVBQ0YsTUFBTSxFQUNOLGVBQWUsQ0FDaEI7SUFDRCxDQUFDLGdCQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxnQkFBSyxDQUN4QixnQkFBTyxDQUFDLEtBQUssRUFDYiw0Q0FBNEMsRUFDNUMsRUFBRSxFQUNGLE1BQU0sRUFDTixlQUFlLENBQ2hCO0NBQ0YsQ0FBQyJ9