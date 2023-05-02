import { Token } from '@uniswap/sdk-core';
import { FACTORY_ADDRESS } from '@uniswap/v3-sdk';
import { ChainId, NETWORKS_WITH_SAME_UNISWAP_ADDRESSES } from './chains';
const CELO_V3_CORE_FACTORY_ADDRESSES = '0xAfE208a311B21f13EF87E33A90049fC17A7acDEc';
const CELO_QUOTER_ADDRESSES = '0x82825d0554fA07f7FC52Ab63c961F330fdEFa8E8';
const CELO_MULTICALL_ADDRESS = '0x633987602DE5C4F337e3DbF265303A1080324204';
const ARBITRUM_GOERLI_V3_CORE_FACTORY_ADDRESSES = '0x4893376342d5D7b3e31d4184c08b265e5aB2A3f6';
const ARBITRUM_GOERLI_QUOTER_ADDRESSES = '0x1dd92b83591781D0C6d98d07391eea4b9a6008FA';
const ARBITRUM_GOERLI_MULTICALL_ADDRESS = '0x8260CB40247290317a4c062F3542622367F206Ee';
const OPTIMISM_GOERLI_V3_CORE_FACTORY_ADDRESSES = '0xB656dA17129e7EB733A557f4EBc57B76CFbB5d10';
const OPTIMISM_GOERLI_QUOTER_ADDRESSES = '0x9569CbA925c8ca2248772A9A4976A516743A246F';
const OPTIMISM_GOERLI_MULTICALL_ADDRESS = '0x07F2D8a2a02251B62af965f22fC4744A5f96BCCd';
const BSC_V3_CORE_FACTORY_ADDRESSES = '0xdB1d10011AD0Ff90774D0C6Bb92e5C5c8b4461F7';
const BSC_QUOTER_ADDRESSES = '0x78D78E420Da98ad378D7799bE8f4AF69033EB077';
const BSC_MULTICALL_ADDRESS = '0x963Df249eD09c358A4819E39d9Cd5736c3087184';
export const BSC_TICK_LENS_ADDRESS = '0xD9270014D396281579760619CCf4c3af0501A47C';
export const BSC_NONFUNGIBLE_POSITION_MANAGER_ADDRESS = '0x7b8A01B39D58278b5DE7e48c8449c9f4F5170613';
export const BSC_SWAP_ROUTER_02_ADDRESS = '0xB971eF87ede563556b2ED4b1C0b0019111Dd85d2';
export const BSC_V3_MIGRATOR_ADDRESS = '0x32681814957e0C13117ddc0c2aba232b5c9e760f';
const FANTOM_V3_CORE_FACTORY_ADDRESSES = '0xeC1c57873388069F55A0FC17fF4eD7C3C05E88F0';
const FANTOM_QUOTER_ADDRESSES = '0x20C0A2664d1A81fF9329aC04A0A296EC1bAaB127';
const FANTOM_MULTICALL_ADDRESS = '0xaEd84fbf1b6ac3378095828CeD1A48683AFeA7b1';
export const FANTOM_TICK_LENS_ADDRESS = '0xa1913EB1DE889508a955BF2370af8C62D34872f9';
export const FANTOM_NONFUNGIBLE_POSITION_MANAGER_ADDRESS = '0xEcb90c912Af96Fd132b55Ba1066607C66FC81449';
export const FANTOM_SWAP_ROUTER_02_ADDRESS = '0x9C2beab981a5e4DbaB38a245c61c4d1deb51017A';
export const FANTOM_V3_MIGRATOR_ADDRESS = '0x1e2623C117Ad1813E0A34B180F011EF56E01E068';
const AVALANCHE_V3_CORE_FACTORY_ADDRESSES = '0x609118B903Db8BB1f26Da2a45490Bf43C3B5dE23';
const AVALANCHE_QUOTER_ADDRESSES = '0xf9159AF2bCba36963349C9Ac73279E2e92d5A1c9';
const AVALANCHE_MULTICALL_ADDRESS = '0xF941230A2fEB327a1f5DB7e29F3792c71114d958';
export const AVALANCHE_TICK_LENS_ADDRESS = '0x80490344c0C208C5aE23C0C3d4C85c844946C7E7';
export const AVALANCHE_NONFUNGIBLE_POSITION_MANAGER_ADDRESS = '0xa80e96EA48c70CB30aadFf31A3ECb76af07AbD8A';
export const AVALANCHE_SWAP_ROUTER_02_ADDRESS = '0xF8C8d8Ba9df43322Df4d56f8521E19dfefAD0660';
export const AVALANCHE_V3_MIGRATOR_ADDRESS = '0x02ae7d9fe3ed18129ecb866b5fa3f7A8BEE76172';
const MOONBEAM_V3_CORE_FACTORY_ADDRESSES = '0xf9CAF7Ffde2822DA3B3B257baC2A15b534B04E7e';
const MOONBEAM_QUOTER_ADDRESSES = '0xAe9B34DAea7063567A1A550b5d7c17B5177aA563';
const MOONBEAM_MULTICALL_ADDRESS = '0xb78A9994376D204EB72a8F77940B66adc6F58E8F';
export const MOONBEAM_TICK_LENS_ADDRESS = '0xd09d73531fEa59299c179435ca309c999f005165';
export const MOONBEAM_NONFUNGIBLE_POSITION_MANAGER_ADDRESS = '0x0A6725a65E89730A3183A200BD83bd8474a2bc3d';
export const MOONBEAM_SWAP_ROUTER_02_ADDRESS = '0x097185A88ABa6ef9a2B18A4fffdAeE9638C79398';
export const MOONBEAM_V3_MIGRATOR_ADDRESS = '0x6997fa83E81f2d52c832644A24Fe5e0BDc3944D2';
const GNOSIS_V3_CORE_FACTORY_ADDRESSES = '0xdB1d10011AD0Ff90774D0C6Bb92e5C5c8b4461F7';
const GNOSIS_QUOTER_ADDRESSES = '0x78D78E420Da98ad378D7799bE8f4AF69033EB077';
const GNOSIS_MULTICALL_ADDRESS = '0x963Df249eD09c358A4819E39d9Cd5736c3087184';
export const GNOSIS_TICK_LENS_ADDRESS = '0xD9270014D396281579760619CCf4c3af0501A47C';
export const GNOSIS_NONFUNGIBLE_POSITION_MANAGER_ADDRESS = '0x7b8A01B39D58278b5DE7e48c8449c9f4F5170613';
export const GNOSIS_SWAP_ROUTER_02_ADDRESS = '0xB971eF87ede563556b2ED4b1C0b0019111Dd85d2';
export const GNOSIS_V3_MIGRATOR_ADDRESS = '0x32681814957e0C13117ddc0c2aba232b5c9e760f';
const KLAYTN_V3_CORE_FACTORY_ADDRESSES = '0xdB1d10011AD0Ff90774D0C6Bb92e5C5c8b4461F7';
const KLAYTN_QUOTER_ADDRESSES = '0x78D78E420Da98ad378D7799bE8f4AF69033EB077';
const KLAYTN_MULTICALL_ADDRESS = '0x963Df249eD09c358A4819E39d9Cd5736c3087184';
export const KLAYTN_TICK_LENS_ADDRESS = '0xD9270014D396281579760619CCf4c3af0501A47C';
export const KLAYTN_NONFUNGIBLE_POSITION_MANAGER_ADDRESS = '0x7b8A01B39D58278b5DE7e48c8449c9f4F5170613';
export const KLAYTN_SWAP_ROUTER_02_ADDRESS = '0xB971eF87ede563556b2ED4b1C0b0019111Dd85d2';
export const KLAYTN_V3_MIGRATOR_ADDRESS = '0x32681814957e0C13117ddc0c2aba232b5c9e760f';
export const V3_CORE_FACTORY_ADDRESSES = {
    ...constructSameAddressMap(FACTORY_ADDRESS),
    [ChainId.CELO]: CELO_V3_CORE_FACTORY_ADDRESSES,
    [ChainId.CELO_ALFAJORES]: CELO_V3_CORE_FACTORY_ADDRESSES,
    [ChainId.OPTIMISM_GOERLI]: OPTIMISM_GOERLI_V3_CORE_FACTORY_ADDRESSES,
    [ChainId.ARBITRUM_GOERLI]: ARBITRUM_GOERLI_V3_CORE_FACTORY_ADDRESSES,
    [ChainId.BSC]: BSC_V3_CORE_FACTORY_ADDRESSES,
    [ChainId.FANTOM]: FANTOM_V3_CORE_FACTORY_ADDRESSES,
    [ChainId.GNOSIS]: GNOSIS_V3_CORE_FACTORY_ADDRESSES,
    [ChainId.KLAYTN]: KLAYTN_V3_CORE_FACTORY_ADDRESSES,
    [ChainId.AVALANCHE]: AVALANCHE_V3_CORE_FACTORY_ADDRESSES,
    [ChainId.MOONBEAM]: MOONBEAM_V3_CORE_FACTORY_ADDRESSES,
    // TODO: Gnosis + Moonbeam contracts to be deployed
};
export const QUOTER_V2_ADDRESSES = {
    ...constructSameAddressMap('0x61fFE014bA17989E743c5F6cB21bF9697530B21e'),
    [ChainId.CELO]: CELO_QUOTER_ADDRESSES,
    [ChainId.CELO_ALFAJORES]: CELO_QUOTER_ADDRESSES,
    [ChainId.OPTIMISM_GOERLI]: OPTIMISM_GOERLI_QUOTER_ADDRESSES,
    [ChainId.ARBITRUM_GOERLI]: ARBITRUM_GOERLI_QUOTER_ADDRESSES,
    [ChainId.BSC]: BSC_QUOTER_ADDRESSES,
    [ChainId.FANTOM]: FANTOM_QUOTER_ADDRESSES,
    [ChainId.GNOSIS]: GNOSIS_QUOTER_ADDRESSES,
    [ChainId.KLAYTN]: KLAYTN_QUOTER_ADDRESSES,
    [ChainId.AVALANCHE]: AVALANCHE_QUOTER_ADDRESSES,
    [ChainId.MOONBEAM]: MOONBEAM_QUOTER_ADDRESSES,
    // TODO: Gnosis + Moonbeam contracts to be deployed
};
export const MIXED_ROUTE_QUOTER_V1_ADDRESSES = {
    [ChainId.MAINNET]: '0x84E44095eeBfEC7793Cd7d5b57B7e401D7f1cA2E',
    [ChainId.RINKEBY]: '0x84E44095eeBfEC7793Cd7d5b57B7e401D7f1cA2E',
    [ChainId.ROPSTEN]: '0x84E44095eeBfEC7793Cd7d5b57B7e401D7f1cA2E',
    [ChainId.GÖRLI]: '0xBa60b6e6fF25488308789E6e0A65D838be34194e',
};
export const UNISWAP_MULTICALL_ADDRESSES = {
    ...constructSameAddressMap('0x1F98415757620B543A52E61c46B32eB19261F984'),
    [ChainId.CELO]: CELO_MULTICALL_ADDRESS,
    [ChainId.CELO_ALFAJORES]: CELO_MULTICALL_ADDRESS,
    [ChainId.OPTIMISM_GOERLI]: OPTIMISM_GOERLI_MULTICALL_ADDRESS,
    [ChainId.ARBITRUM_GOERLI]: ARBITRUM_GOERLI_MULTICALL_ADDRESS,
    [ChainId.BSC]: BSC_MULTICALL_ADDRESS,
    [ChainId.FANTOM]: FANTOM_MULTICALL_ADDRESS,
    [ChainId.GNOSIS]: GNOSIS_MULTICALL_ADDRESS,
    [ChainId.KLAYTN]: KLAYTN_MULTICALL_ADDRESS,
    [ChainId.AVALANCHE]: AVALANCHE_MULTICALL_ADDRESS,
    [ChainId.MOONBEAM]: MOONBEAM_MULTICALL_ADDRESS,
    // TODO: Gnosis + Moonbeam contracts to be deployed
};
export const SWAP_ROUTER_02_ADDRESSES = (chainId) => {
    if (chainId == ChainId.BSC) {
        return BSC_SWAP_ROUTER_02_ADDRESS;
    }
    if (chainId == ChainId.FANTOM) {
        return FANTOM_SWAP_ROUTER_02_ADDRESS;
    }
    if (chainId == ChainId.GNOSIS) {
        return GNOSIS_SWAP_ROUTER_02_ADDRESS;
    }
    if (chainId == ChainId.KLAYTN) {
        return KLAYTN_SWAP_ROUTER_02_ADDRESS;
    }
    if (chainId == ChainId.AVALANCHE) {
        return AVALANCHE_SWAP_ROUTER_02_ADDRESS;
    }
    if (chainId == ChainId.MOONBEAM) {
        return MOONBEAM_SWAP_ROUTER_02_ADDRESS;
    }
    return '0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45';
};
export const OVM_GASPRICE_ADDRESS = '0x420000000000000000000000000000000000000F';
export const ARB_GASINFO_ADDRESS = '0x000000000000000000000000000000000000006C';
export const TICK_LENS_ADDRESS = '0xbfd8137f7d1516D3ea5cA83523914859ec47F573';
export const NONFUNGIBLE_POSITION_MANAGER_ADDRESS = '0xC36442b4a4522E871399CD717aBDD847Ab11FE88';
export const V3_MIGRATOR_ADDRESS = '0xA5644E29708357803b5A882D272c41cC0dF92B34';
export const MULTICALL2_ADDRESS = '0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696';
export function constructSameAddressMap(address, additionalNetworks = []) {
    return NETWORKS_WITH_SAME_UNISWAP_ADDRESSES.concat(additionalNetworks).reduce((memo, chainId) => {
        memo[chainId] = address;
        return memo;
    }, {});
}
export const WETH9 = {
    [ChainId.MAINNET]: new Token(ChainId.MAINNET, '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', 18, 'WETH', 'Wrapped Ether'),
    [ChainId.ROPSTEN]: new Token(ChainId.ROPSTEN, '0xc778417E063141139Fce010982780140Aa0cD5Ab', 18, 'WETH', 'Wrapped Ether'),
    [ChainId.RINKEBY]: new Token(ChainId.RINKEBY, '0xc778417E063141139Fce010982780140Aa0cD5Ab', 18, 'WETH', 'Wrapped Ether'),
    [ChainId.GÖRLI]: new Token(ChainId.GÖRLI, '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6', 18, 'WETH', 'Wrapped Ether'),
    [ChainId.KOVAN]: new Token(ChainId.KOVAN, '0xd0A1E359811322d97991E03f863a0C30C2cF029C', 18, 'WETH', 'Wrapped Ether'),
    [ChainId.OPTIMISM]: new Token(ChainId.OPTIMISM, '0x4200000000000000000000000000000000000006', 18, 'WETH', 'Wrapped Ether'),
    [ChainId.OPTIMISM_GOERLI]: new Token(ChainId.OPTIMISM_GOERLI, '0x4200000000000000000000000000000000000006', 18, 'WETH', 'Wrapped Ether'),
    [ChainId.OPTIMISTIC_KOVAN]: new Token(ChainId.OPTIMISTIC_KOVAN, '0x4200000000000000000000000000000000000006', 18, 'WETH', 'Wrapped Ether'),
    [ChainId.ARBITRUM_ONE]: new Token(ChainId.ARBITRUM_ONE, '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1', 18, 'WETH', 'Wrapped Ether'),
    [ChainId.ARBITRUM_RINKEBY]: new Token(ChainId.ARBITRUM_RINKEBY, '0xB47e6A5f8b33b3F17603C83a0535A9dcD7E32681', 18, 'WETH', 'Wrapped Ether'),
    [ChainId.ARBITRUM_GOERLI]: new Token(ChainId.ARBITRUM_GOERLI, '0xe39Ab88f8A4777030A534146A9Ca3B52bd5D43A3', 18, 'WETH', 'Wrapped Ether'),
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzc2VzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3V0aWwvYWRkcmVzc2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMxQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFbEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxvQ0FBb0MsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUV6RSxNQUFNLDhCQUE4QixHQUNsQyw0Q0FBNEMsQ0FBQztBQUMvQyxNQUFNLHFCQUFxQixHQUFHLDRDQUE0QyxDQUFDO0FBQzNFLE1BQU0sc0JBQXNCLEdBQUcsNENBQTRDLENBQUM7QUFFNUUsTUFBTSx5Q0FBeUMsR0FDN0MsNENBQTRDLENBQUM7QUFDL0MsTUFBTSxnQ0FBZ0MsR0FDcEMsNENBQTRDLENBQUM7QUFDL0MsTUFBTSxpQ0FBaUMsR0FDckMsNENBQTRDLENBQUM7QUFFL0MsTUFBTSx5Q0FBeUMsR0FDN0MsNENBQTRDLENBQUM7QUFDL0MsTUFBTSxnQ0FBZ0MsR0FDcEMsNENBQTRDLENBQUM7QUFDL0MsTUFBTSxpQ0FBaUMsR0FDckMsNENBQTRDLENBQUM7QUFFL0MsTUFBTSw2QkFBNkIsR0FDakMsNENBQTRDLENBQUM7QUFDL0MsTUFBTSxvQkFBb0IsR0FBRyw0Q0FBNEMsQ0FBQztBQUMxRSxNQUFNLHFCQUFxQixHQUFHLDRDQUE0QyxDQUFDO0FBRTNFLE1BQU0sQ0FBQyxNQUFNLHFCQUFxQixHQUNoQyw0Q0FBNEMsQ0FBQztBQUMvQyxNQUFNLENBQUMsTUFBTSx3Q0FBd0MsR0FDbkQsNENBQTRDLENBQUM7QUFDL0MsTUFBTSxDQUFDLE1BQU0sMEJBQTBCLEdBQ3JDLDRDQUE0QyxDQUFDO0FBQy9DLE1BQU0sQ0FBQyxNQUFNLHVCQUF1QixHQUNsQyw0Q0FBNEMsQ0FBQztBQUUvQyxNQUFNLGdDQUFnQyxHQUNwQyw0Q0FBNEMs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